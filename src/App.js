import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Predictions from './model'
import {useState} from 'react'
import Welcome from './Pages/Welcome/welcome'
import MyNavbar from './Components/Navbar/navbar';

function App() {
  require('dotenv').config();
  const [weather, setWeather] = useState()

  return (
    <div className="App">
      <MyNavbar />
      <Predictions></Predictions>
      <Welcome />
    </div>
  );
}

export default App;
