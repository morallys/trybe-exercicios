import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      login: false,
    };

    this.changeLogin = this.changeLogin.bind(this);
  }

  changeLogin() {
    this.setState({
      login: true,
    });
  }

  render() {
    const { login } = this.state;

    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              { login ? <Redirect to="/search" /> : (
                <Login changeLogin={ this.changeLogin } />) }
            </Route>
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
