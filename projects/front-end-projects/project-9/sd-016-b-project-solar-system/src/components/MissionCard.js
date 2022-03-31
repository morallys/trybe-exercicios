import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const prop = this.props;
    return (
      <div data-testid="mission-card">
        <span data-testid="mission-name">{prop.name}</span>
        <span data-testid="mission-year">{prop.year}</span>
        <span data-testid="mission-country">{prop.country}</span>
        <span data-testid="mission-destination">{prop.destination}</span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
