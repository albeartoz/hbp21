import './App.css';
import React from 'react';
import {useState} from 'react'
import Welcome from './Pages/Welcome/welcome'
import Main from './main';
import MyNavbar from './Components/Navbar/navbar';
import Predictions from './model'

function App() {
  document.body.style = 'background: #bee9fb;';
  require('dotenv').config();

  return (
    <div className="App">
      <MyNavbar />
      <Main />
    </div>
  );
}

export default App;
