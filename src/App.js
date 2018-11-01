import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Window from './components/Window'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Window />
      </div>
    );
  }
}

export default App;
