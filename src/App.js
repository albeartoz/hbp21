import './App.css';
import React from 'react';
import Welcome from './Pages/Welcome/welcome'
import MyNavbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
    </div>
  );
}


export default App;
