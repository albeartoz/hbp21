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
  document.body.style = 'background: #bee9fb;';
  require('dotenv').config();
  const [weather, setWeather] = useState()

  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
    </div>
  );
}

export default App;
