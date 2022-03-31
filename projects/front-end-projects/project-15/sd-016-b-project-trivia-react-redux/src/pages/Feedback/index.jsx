import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

class Feedback extends Component {
  directToHome = () => {
    const { history } = this.props;

    history.push('/');
  };

  directToRanking = () => {
    const { history } = this.props;

    history.push('/ranking');
  };

  render() {
    const { assertions, score } = this.props;
    const NUMBER_ASSERTS = 3;
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">
          {assertions < NUMBER_ASSERTS ? 'Could be better...' : 'Well Done!'}
        </p>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.directToHome }
        >
          Play again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.directToRanking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedback);

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,

  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
