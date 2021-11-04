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

  btnClass (whichBtn) {
    this.setState((estadoAnterior, _props) => ({
      [`clicksBtn${whichBtn}`]: estadoAnterior[`clicksBtn${whichBtn}`] + 1
    }))
  }

  render() {
    return (
      <>
        <button id='btn1' onClick={() => this.btnClass('1')}>{this.state.clicksBtn1}</button>
        <button id='btn2' onClick={() => this.btnClass('2')}>{this.state.clicksBtn2}</button>
        <button id='btn3' onClick={() => this.btnClass('3')}>{this.state.clicksBtn3}</button>
      </>
    )}
}

export default App;
