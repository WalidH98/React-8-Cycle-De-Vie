import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './Form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        <Formulaire/>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      
      </div>
    );
  }
}

export default App;
