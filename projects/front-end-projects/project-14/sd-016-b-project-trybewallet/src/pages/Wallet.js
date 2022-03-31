import React from 'react';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import Table from '../components/Table';

import '../css/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <div className="div-header">
          <div className="div-title">
            <p className="header-title">TrybeWallet</p>
          </div>
          <div className="div-component-header">
            <Header />
          </div>
        </div>
        <Expenses />
        <Table />
      </div>
    );
  }
}

export default Wallet;
