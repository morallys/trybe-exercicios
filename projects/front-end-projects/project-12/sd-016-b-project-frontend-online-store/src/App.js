import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Details from './pages/Details';

import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Search } />
            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/details/:id" component={ Details } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
