import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/ButtonAddCart.css';
import { getCart, setCart } from '../services/storage';

export default class ButtonAddCart extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;

    const itemsCart = getCart();

    setCart(itemsCart ? [...itemsCart, product] : [product]);
  }

  render() {
    const { dataTestid } = this.props;
    return (
      <button
        type="submit"
        className="btn-add-cart"
        onClick={ this.handleClick }
        data-testid={ dataTestid }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonAddCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

/**
 * Eu já tenho o produto que foi adicionado
 * salvar no estado do carrinho o item que será renderizado no /cart
 * alterar o estado do carrinho, incrementando o número
 * Quando abrir o carrinho, renderizar em componentDidMount, o elemento que está salvo no state
 */
