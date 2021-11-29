import React, { Component } from 'react';

import './App.css';
import ValidEmail from './ValidEmail';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      saveEmail: '',
    }

    this.changeEmail = this.changeEmail.bind(this);
    this.changeSaveEmail = this.changeSaveEmail.bind(this);
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' })
  }


  render() {
    const { email, saveEmail } = this.state;

    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            type="email"
            id="id-email"
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          type="button"
          value="Enviar"
          data-testid="id-send"
          id="btn-send"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input type="button" value="Voltar" id="btn-send" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}
