import './App.css';
import logo from './covidex-logo.png';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Predictions from './model'
import Navbar from './navbar'
import {useState} from 'react'
import APIDisp from './weather'

function App() {
  require('dotenv').config();
  const [weather, setWeather] = useState()

  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form className="App-form">
          <Form.Control className="text-center" size="lg" type="text" placeholder="Type your location here" />
        </Form>
      </header>
    </div>
  )
}

export default App;
