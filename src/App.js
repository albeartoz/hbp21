import './App.css';
import React from 'react';
import {useState} from 'react'
import Main from './main';
import MyNavbar from './Components/Navbar/navbar';

function App() {
  document.body.style = 'background: #bee9fb;';
  require('dotenv').config();
  const [weather, setWeather] = useState()

  return (
    <div className="App">
      <MyNavbar />
      <Main />
    </div>
  );
}

export default App;
