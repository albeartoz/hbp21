import numpy as np
import pandas as pd
import keras
from sklearn import preprocessing
from sklearn import model_selection
from sklearn.metrics import r2_score
import matplotlib.pyplot as plt
from matplotlib import style

style.use('ggplot')

df1 = pd.read_csv('C:/Users/tasph/Desktop/us_daily_weather_2020.csv',
                  usecols=['Province/State', 'time', 'pressure', 'windSpeed', 'windGust',
                           'temperatureMin', 'temperatureMax'])
df2 = pd.read_csv('C:/Users/tasph/Desktop/covid_data.csv',
                  usecols=['date', 'positiveIncrease'])

# cleaning up the datasets, removing all the unnecessary information
df1['time'] = pd.to_datetime(df1['time'])
mask = (df1['time'] >= '2020-03-07 00:00:00') & (df1['time'] <= '2020-04-20 00:00:00')
df1 = df1.loc[mask]
df1 = df1.drop(['time'], axis=1, inplace=False)
df1 = df1.drop(['Province/State'], axis=1, inplace=False)
df2['date'] = pd.to_datetime(df2['date'])
mask2 = (df2['date'] >= '2020-03-07 00:00:00') & (df2['date'] <= '2020-04-20 00:00:00')
df2 = df2.loc[mask2]
df2 = df2.drop(['date'], axis=1, inplace=False)

# obtaining data from the dataframes and putting them into their respective input and output arrays
X_inputs = []  # the features
y_outputs = []  # the labels
for row in df1.values:
    pressure = row[0]
    windSpeed = row[1]
    windGust = row[2]
    tempMin = row[3]
    tempMax = row[4]
    arr = [pressure, windSpeed, windGust, tempMin, tempMax]
    arr = np.array(arr)
    X_inputs.append(arr)

for row in df2.values:
    y_outputs.append(row[0])

X_inputs = np.array(X_inputs)
y_outputs = np.array(y_outputs)

# plotting out the data points to determine which regression analysis to use
plt.plot(X_inputs, y_outputs)
plt.xlabel('Weather variables')
plt.ylabel('COVID Positive Increase Rate')
plt.show()

# generating the training and testing datasets and normalizing the inputs
X_train, X_test, y_train, y_test = model_selection.train_test_split(X_inputs, y_outputs,
                                                                    test_size=0.2)
X_train = preprocessing.scale(X_train)
X_test = preprocessing.scale(X_test)

# creating, compiling, and training the neural network model
model = keras.models.Sequential()
model.add(keras.layers.Dense(64, input_shape=(5,), activation='relu'))
model.add(keras.layers.Dense(64, activation='relu'))
model.add(keras.layers.Dense(1))

model.compile(loss='mean_squared_error', optimizer='adam')
model.fit(X_train, y_train, epochs=250, validation_split=0.1)

# saving the model for future use
model.save('C:/Users/tasph/Desktop/hbp21_py')

# predicting "future" covid positive rates with the test inputs
prediction = model.predict(X_test)
print('The R2 score on the test inputs is:\t{:0.3f}'.format(r2_score(y_test, prediction)))

# converting the saved .pb model into a .h5 model
new_model = keras.models.load_model('C:/Users/tasph/Desktop/hbp21_py', compile=False)
keras.models.save_model(new_model, 'saved_model.h5')
