import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is Care Central.</p>
          <p>Let's help you find the nearest healthcare facility to you.</p>
        </header>
      </div>
    );
  }
}

export default App;
