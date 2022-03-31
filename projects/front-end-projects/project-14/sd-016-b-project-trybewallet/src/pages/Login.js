import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/Login.css';
import { addUser } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      btnDisable: true,
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.verifyCredentials = this.verifyCredentials.bind(this);
  }

  verifyCredentials() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.com?$/;
    const minPass = 5;

    const testEmail = emailRegex.test(email);
    const testPassword = password.length >= minPass;

    if (testEmail && testPassword) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.verifyCredentials();
  }

  submitLogin() {
    const { addLoginToGlobalState, history } = this.props;
    const { email } = this.state;

    addLoginToGlobalState(email);
    history.push('/carteira');
  }

  render() {
    const { btnDisable, email, password } = this.state;

    return (
      <div>
        <div className="div-login">
          <img
            src="https://noticiasdatv.uol.com.br/media/_versions/everybody-hates-chris-julius-dia-dos-pais_fixed_large.jpg"
            alt="Julius, everybody hate Cris"
            className="img-logo"
          />

          <input
            type="email"
            id="email-input"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
            value={ email }
          />

          <input
            type="password"
            id="password-input"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handleChange }
            value={ password }
          />

          <button
            type="submit"
            className="btn-login"
            disabled={ btnDisable }
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  addLoginToGlobalState: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addLoginToGlobalState: (email) => dispatch(addUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
