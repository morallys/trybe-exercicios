// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();

    this.btnClass = this.btnClass.bind(this);
    this.state ={
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    }
  }

  btnClass (event) {
    const { name } = event.target;

    this.setState((estadoAnterior, _props) => ({
      [name]: estadoAnterior[name] + 1
    }))
  }

  render() {
    return (
      <>
        <button id='btn1' name='clicksBtn1' onClick={this.btnClass}>{this.state.clicksBtn1}</button>
        <button id='btn2' name='clicksBtn2' onClick={this.btnClass}>{this.state.clicksBtn2}</button>
        <button id='btn3' name='clicksBtn3' onClick={this.btnClass}>{this.state.clicksBtn3}</button>
      </>
    )}
}

export default App;
