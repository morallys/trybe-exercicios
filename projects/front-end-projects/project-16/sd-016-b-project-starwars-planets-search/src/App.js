import React from 'react';
import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import TablePlanets from './components/TablePlanets';
import Provider from './context/providerContext';

function App() {
  return (
    <Provider>
      <Header />
      <SubHeader />
      <TablePlanets />
    </Provider>
  );
}

export default App;
