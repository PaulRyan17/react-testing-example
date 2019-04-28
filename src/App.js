import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

class App extends Component {
  handleClick = (value) => {
    console.log(value)
  }
  render() {
    return (
      <Card handleClick={this.handleClick} />
    );
  }
}

export default App;
