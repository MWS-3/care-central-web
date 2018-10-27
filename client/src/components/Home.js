import React from 'react';
import logo from "../logo.svg";
import "../App.css";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Care Central.</p>
        <p>Let's help you find the nearest healthcare facility to you.</p>
      </header>
    </div>
  )
}

export default Home;