import React from 'react';

import Card from './components/Card';
import Form from './components/Form';

import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      descInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageCard: '',
      rareCard: '',
      trunfoInput: false,
      buttonDisabled: true,
      arrSaveCard: [],
      hasTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.newCardItems = this.newCardItems.bind(this);
    this.standardCard = this.standardCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handleChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: (target.type === 'checkbox') ? target.checked : target.value,
    }, () => {
      if (this.validation()) {
        this.setState({ buttonDisabled: true });
      } else {
        this.setState({ buttonDisabled: false });
      }
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { arrSaveCard } = this.state;

    this.setState({
      arrSaveCard: [
        ...arrSaveCard,
        this.newCardItems(),
      ],
    });
    this.standardCard();
  }

  newCardItems() {
    const {
      nameInput,
      descInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageCard,
      rareCard,
      trunfoInput,
    } = this.state;

    const card = {
      cardName: nameInput,
      cardDescription: descInput,
      cardAttr1: attr1Input,
      cardAttr2: attr2Input,
      cardAttr3: attr3Input,
      cardImage: imageCard,
      cardRare: rareCard,
      cardTrunfo: trunfoInput,
    };
    return card;
  }

  standardCard() {
    const { trunfoInput, hasTrunfo } = this.state;

    if (trunfoInput) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState({
      nameInput: '',
      descInput: '',
      attr1Input: '0',
      attr2Input: '0',
      attr3Input: '0',
      imageCard: '',
      rareCard: 'normal',
      trunfoInput: hasTrunfo,
      buttonDisabled: true,
    });
  }

  deleteCard(delIndex) {
    const { arrSaveCard } = this.state;

    if (arrSaveCard[delIndex].cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }

    this.setState({
      arrSaveCard: arrSaveCard.filter((e, index) => delIndex !== index),
    });
  }

  validation() {
    const {
      nameInput,
      descInput,
      imageCard,
      rareCard,
      attr1Input,
      attr2Input,
      attr3Input,
    } = this.state;

    let inputIsValid = true;
    const points = 210;
    const maxValue = 90;
    let sumAttr = 0;

    const testInputs = nameInput && descInput && imageCard && rareCard;
    const testPoints = (
      Number(attr1Input) <= maxValue && Number(attr1Input) >= 0)
      && (Number(attr2Input) <= maxValue && Number(attr2Input) >= 0)
      && (Number(attr3Input) <= maxValue && Number(attr3Input) >= 0);

    if (testPoints && testInputs) {
      sumAttr = Number(attr1Input) + Number(attr2Input) + Number(attr3Input);

      if (sumAttr <= points) {
        inputIsValid = false;
      }
    }

    return inputIsValid;
  }

  render() {
    const {
      nameInput,
      descInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageCard,
      rareCard,
      trunfoInput,
      buttonDisabled,
      hasTrunfo,
      arrSaveCard,
    } = this.state;

    return (
      <>
        <h1 className="titleHeader">Super Tryunfo</h1>
        <div className="divDisplay">
          <div className="divForm">
            <Form
              cardName={ nameInput }
              cardDescription={ descInput }
              cardAttr1={ attr1Input }
              cardAttr2={ attr2Input }
              cardAttr3={ attr3Input }
              cardImage={ imageCard }
              cardRare={ rareCard }
              cardTrunfo={ trunfoInput }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ buttonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="divCard">
            <Card
              cardName={ nameInput }
              cardDescription={ descInput }
              cardAttr1={ attr1Input }
              cardAttr2={ attr2Input }
              cardAttr3={ attr3Input }
              cardImage={ imageCard }
              cardRare={ rareCard }
              cardTrunfo={ trunfoInput }
              show="print"
            />
          </div>
        </div>
        <div className="titleListCards">
          { arrSaveCard.length === 0 ? null : <h1>Todas as cartas</h1> }
        </div>
        <div className="divListCards">
          {arrSaveCard.map((card, index) => (
            <div key={ index } className="cardItem">
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                show="noPrint"
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(index) }
                className="btnListItem"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
