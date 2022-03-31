import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpUser, saveToken, resetGame } from '../../redux/actions';

import Input from '../../components/Input';

import logo from '../../trivia.png';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  hasError: true,
};

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { gameReset } = this.props;

    gameReset();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.checkError);
  };

  handleSubmit = async () => {
    const { name, gravatarEmail } = this.state;
    const { userSignUp, history, storeToken } = this.props;

    userSignUp({
      name,
      gravatarEmail,
    });
    await storeToken();

    this.setState(INITIAL_STATE, () => {
      history.push('/question/0');
    });
  };

  handleConfig = () => {
    const { history } = this.props;

    history.push('/config');
  };

  checkError = () => {
    const { name, gravatarEmail } = this.state;

    this.setState({
      hasError: name === '' || gravatarEmail === '',
    });
  };

  render() {
    const { hasError, gravatarEmail, name } = this.state;

    return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <form>
          <Input
            type="text"
            name="gravatarEmail"
            value={ gravatarEmail }
            label="Email"
            onChange={ this.handleChange }
            testId="input-gravatar-email"
          />

          <Input
            type="text"
            name="name"
            value={ name }
            label="Nome"
            onChange={ this.handleChange }
            testId="input-player-name"
          />

          <button
            type="button"
            disabled={ hasError }
            onClick={ this.handleSubmit }
            data-testid="btn-play"
          >
            Play
          </button>

          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.handleConfig }
          >
            Configurações
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSignUp: (user) => dispatch(signUpUser(user)),
  storeToken: () => dispatch(saveToken()),
  gameReset: () => dispatch(resetGame),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userSignUp: PropTypes.func.isRequired,
  storeToken: PropTypes.func.isRequired,
  gameReset: PropTypes.func.isRequired,
};
