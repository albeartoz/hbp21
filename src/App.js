import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Predictions from './model'
import {useState} from 'react'
import APIDisp from './weather'
import Welcome from './Pages/Welcome/welcome'
import MyNavbar from './Components/Navbar/navbar';

function App() {
  require('dotenv').config();
  const [weather, setWeather] = useState()

  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
    </div>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 05c68f9663f688abf53cb98a8eeae7dd03d9c29b
export default App;
