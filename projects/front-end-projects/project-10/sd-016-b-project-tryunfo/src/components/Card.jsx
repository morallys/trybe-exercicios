import React, { Component } from 'react';

import PropTypes from 'prop-types';

import '../css/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      show,
    } = this.props;

    return (
      <div className="elementCard">
        { show === 'print' && <h1>Pré-visualização</h1> }
        <div className="card">
          <span data-testid="name-card">{ cardName }</span>
          { cardImage && (
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />)}
          <span data-testid="description-card">{ cardDescription }</span>
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
          <span data-testid="rare-card">{ cardRare }</span>
          { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : false }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  show: PropTypes.string.isRequired,
};
