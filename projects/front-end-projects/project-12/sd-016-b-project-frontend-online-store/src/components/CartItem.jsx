import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCart, setCart } from '../services/storage';

export default class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      numberItems: 1,
      product: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleGetCart = this.handleGetCart.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidMount() {
    this.handleGetCart();
  }

  handleGetCart() {
    const arrItemsCart = getCart();
    const { id } = this.props;

    const numberItemsCart = arrItemsCart.filter((item) => item.id === id).length;

    this.setState({
      numberItems: numberItemsCart,
      product: arrItemsCart,
    });
  }

  handleClick(e) {
    const { numberItems, product } = this.state;
    const { id, index } = this.props;

    if (e.target.value === '+') {
      this.setState({ numberItems: numberItems + 1 });

      const itemsCart = getCart();

      setCart(itemsCart && [...itemsCart, product[index]]);
    } else if (e.target.value === '-') {
      this.setState({ numberItems: (numberItems === 0 ? 0 : numberItems - 1) });

      for (let indexFor = 0; indexFor < product.length; indexFor += 1) {
        if (product[indexFor].id === id) {
          product.splice(indexFor, 1);
        }
      }

      // product.filter((item) => )
      // setCart(test);
    }
  }

  handleDeleteItem() {
    const { product } = this.state;
    const { id } = this.props;

    const deleteItem = product.filter((item) => item.id !== id);

    setCart(deleteItem);
  }

  render() {
    const { title, price, thumbnail } = this.props;
    const { numberItems } = this.state;

    return (
      <>
        <div className="div-thumbnail">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="div-info">
          <span
            className="span-title"
            data-testid="shopping-cart-product-name"
          >
            { title }
          </span>
          <span className="span-price">
            { 'R$ ' }
            { price }
          </span>
          <div className="div-btn">
            <button type="submit" onClick={ this.handleDeleteItem }>Excluir</button>
            <button
              type="submit"
              onClick={ this.handleClick }
              value="-"
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <button
              type="submit"
              onClick={ this.handleClick }
              value="+"
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <span data-testid="shopping-cart-product-quantity">{ numberItems }</span>
          </div>
        </div>
      </>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
