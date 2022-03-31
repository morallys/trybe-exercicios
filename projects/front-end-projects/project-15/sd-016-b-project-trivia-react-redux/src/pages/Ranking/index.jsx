import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const players = JSON.parse(localStorage.getItem('ranking'));
    // const playersWithId = players.reduce((acc, curr, i) => {
    //   acc[i] = { ...curr, testid: i };
    //   return acc;
    // }, []);

    const sortedArr = players.sort((a, b) => b.score - a.score);
    this.setState({ players: sortedArr });
  }

  directToLogin = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { players } = this.state;

    return (

      <div>
        <h1 data-testid="ranking-title">Ranking</h1>

        <span>Nome</span>
        <span>Pontuação</span>
        {players.map((player, i) => (
          <div key={ i }>
            <p data-testid={ `player-name-${i}` }>{player.name}</p>
            <p data-testid={ `player-score-${i}` }>{player.score}</p>
            <img src={ player.picture } alt="gravatar" />
          </div>
        ))}

        <button type="button" data-testid="btn-go-home" onClick={ this.directToLogin }>
          Voltar ao início
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Ranking;
