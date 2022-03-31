import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAnswer } from '../../redux/actions';

const TIMER_END = 0;

class Timer extends Component {
  componentDidUpdate(prevProps) {
    const { stop, isSelected, time, answerSelect } = this.props;

    if (time === TIMER_END && prevProps.time !== time) {
      stop();
      answerSelect();
    }

    if (
      (time === TIMER_END && prevProps.time !== time)
      || prevProps.isSelected !== isSelected
    ) {
      stop();
    }
  }

  render() {
    const { time } = this.props;
    return <div>{time}</div>;
  }
}

const mapStateToProps = (state) => ({
  isSelected: state.game.isSelected,
});

const mapDispatchToProps = (dispatch) => ({
  answerSelect: () => dispatch(selectAnswer),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  stop: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  answerSelect: PropTypes.func.isRequired,
};
