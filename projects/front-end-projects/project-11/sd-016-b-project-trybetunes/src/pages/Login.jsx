import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      btnEnable: true,
      inputText: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const minText = 3;

    if (e.target.value.length >= minText) {
      this.setState({
        btnEnable: false,
        inputText: e.target.value,
      });
    } else {
      this.setState({
        btnEnable: true,
        inputText: e.target.value,
      });
    }
  }

  callCreateUser(name) {
    const { changeLogin } = this.props;

    this.setState({ loading: true },
      async () => {
        await createUser({ name });
        this.setState({ loading: false });
        changeLogin();
      });
  }

  render() {
    const { btnEnable, inputText, loading } = this.state;

    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : (
          <>
            <label htmlFor="input-login">
              Login:
              <input
                type="text"
                id="input-login"
                onChange={ this.handleChange }
                data-testid="login-name-input"
              />
            </label>

            <button
              type="submit"
              data-testid="login-submit-button"
              disabled={ btnEnable }
              onClick={ () => this.callCreateUser(inputText) }
            >
              Entrar
            </button>
          </>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  changeLogin: PropTypes.func.isRequired,
};
