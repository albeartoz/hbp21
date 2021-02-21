# CoviDex
## Inspiration
It was the unanimous cheer of agreement when Albert suggested this idea that we decided to pursue it. A cheer that indicated our common interest as a team in HackBeanpot 2021 to address an unfortunate event in history. We also considered how our project would allow us to best emphasize our own skill sets. Lastly, being in a pandemic, caring about the safety of others, and wanting to develop something unique also contributed to the main purpose of our project.

## What it does
We developed an application that can give a covid "forecast" based on weather conditions in the user's area. It allows the user to get a sense of how COVID might spread around them for the next week. The UI also gives easy links to the CDC and WHO websites for official COVID information.

## How we built it
We developed a web application with React and the Openweathermap API, combined with a Tensorflow.js model that can predict the COVID risk factor in a certain state given certain weather conditions as inputs. This model was initially built using Tensorflow in Python and converted to a js model, then hosted in AWS S3 to load into our React application. After the user inputs their location, the weather API returns the same weather features we trained on, and these are forward-passed into the model which then outputs a prediction we render to the screen. 

## Challenges we ran into
There were challenges in trying to work with the different APIs we had to use to obtain the data necessary as well as some of the Machine Learning technologies. Regarding ML, a lot of the effort was focused on making sure we preprocessed the dataset correctly and set up an efficient neural network. We didn’t really get to overcome this, but we realized that the features and labels used actually did not have any sort of correlation that could be visualized through regression. Thus, our model isn’t entirely functional.

## Accomplishments that we're proud of
We got a fully functional UI with all the components we prototyped initially up and running, and a functional tensorflow.js workflow in the "backend." We were able to load a dummy model from AWS and perform predictions on dummy data, then rendering this prediction on our React app. We were planning on translating this workflow to our actual model but we ran out of time. 

## What we learned
We picked up some knowledge about React and how that empowers front-end web developers to do cool things with Javascript that isn’t as user-friendly with other technologies. We also gained experience using APIs and drawing data from them as developers. Additionally, we learned how to incorporate a machine learning model into a frontend and use new data for accurate predictions (using a dummy model for now, hopefully the real model in the future). 

## What's next for CoviDex
We want to incorporate our working model into the "backend," as right now the predictions are all arbitrary. Most importantly, we want to improve our model – we realize that ~36 hours wasn't enough to consider all the factors that go into making a new model, and there was probably some bias or confounding variables we didn't consider. More thorough research into how weather variables affect covid will give us more accurate predictions to show the user. 
