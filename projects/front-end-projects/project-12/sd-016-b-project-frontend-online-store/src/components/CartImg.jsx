import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/storage';

const SECONDS = 1000;

export default class CartImg extends Component {
  constructor() {
    super();

    this.state = {
      itemsCart: 0,
    };

    this.handleItemsCart = this.handleItemsCart.bind(this);
  }

  componentDidMount() {
    this.handleItemsCart();
  }

  handleItemsCart() {
    setInterval(() => {
      const getCartItems = getCart();

      if (getCartItems) {
        this.setState({
          itemsCart: getCartItems.length,
        });
      }
    }, SECONDS);
  }

  render() {
    const { itemsCart } = this.state;

    return (
      <>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            src="https://www.freeiconspng.com/uploads/blue-shopping-cart-icon-20.png"
            alt="cart"
            className="cartImg"
            id="cartImg"
          />
        </Link>
        <p
          className="text-cartImg"
          data-testid="shopping-cart-product-quantity"
        >
          { itemsCart }
        </p>
      </>
    );
  }
}
