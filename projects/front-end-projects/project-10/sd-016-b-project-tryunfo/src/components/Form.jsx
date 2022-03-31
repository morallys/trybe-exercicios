import React, { Component } from 'react';

import PropTypes from 'prop-types';

import '../css/Form.css';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const maxPoints = 210;
    const sumPoints = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const conditionPoints = (maxPoints - sumPoints) < 0 ? 0 : maxPoints - sumPoints;

    return (
      <div>
        <form>
          <h1>Adicionar nova carta</h1>
          <label htmlFor="cardName">
            Nome da carta:
            <input
              data-testid="name-input"
              type="text"
              name="nameInput"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="descInput"
              id="cardDescription"
              cols="21"
              rows="12"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr1">
            Primeiro atributo:
            <input
              type="number"
              data-testid="attr1-input"
              name="attr1Input"
              id="cardAttr1"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2">
            Segundo atributo:
            <input
              type="number"
              data-testid="attr2-input"
              name="attr2Input"
              id="cardAttr2"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3">
            Terceiro atributo:
            <input
              type="number"
              data-testid="attr3-input"
              name="attr3Input"
              id="cardAttr3"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <span>{`Pontos à distribuir: ${conditionPoints}`}</span>

          <label htmlFor="cardImage">
            URL imagem da carta:
            <input
              type="text"
              data-testid="image-input"
              name="imageCard"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare" className="cardRare">
            Raridade da carta:
            <select
              name="rareCard"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
              <option value="">Escolha a raridade</option>
            </select>
          </label>

          <label htmlFor="cardTrunfo" className="cardTrunfo">
            Super Trunfo:
            { hasTrunfo ? (
              <span>Você já tem um Super Trunfo em seu baralho</span>
            ) : (
              <input
                type="checkbox"
                name="trunfoInput"
                id="cardTrunfo"
                checked={ cardTrunfo }
                data-testid="trunfo-input"
                onChange={ onInputChange }
              />
            )}
          </label>

          <button
            type="submit"
            data-testid="save-button"
            id="saveCardBtn"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar carta
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
