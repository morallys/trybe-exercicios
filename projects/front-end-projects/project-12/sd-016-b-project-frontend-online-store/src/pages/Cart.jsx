import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/storage';

import '../css/Cart.css';
import CartItem from '../components/CartItem';

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      arrItemsCart: [],
      qtdItem: 0,
      sumValue: 0,
    };

    this.handleGetCart = this.handleGetCart.bind(this);
  }

  componentDidMount() {
    this.handleGetCart();
  }

  handleGetCart() {
    const getCartItems = getCart();

    if (getCartItems) {
      let sum = 0;

      getCartItems.forEach((item) => {
        sum += item.price;
      });

      this.setState({
        sumValue: sum.toFixed(2),
        qtdItem: getCartItems.length,
        arrItemsCart: getCartItems,
      });
    }
  }

  handleItemCart() {
    const { arrItemsCart } = this.state;
    let renderElements = '';
    // console.log(arrItemsCart);

    if (arrItemsCart.length === 0) {
      renderElements = (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    } else {
      // LINK - Ideia de solução para remover os duplicados: https://www.youtube.com/watch?v=AiTyr_n5pws

      const uniqueProducts = new Set();

      arrItemsCart.forEach((item) => {
        uniqueProducts.add(item.id);
      });

      const arrUniqueProducts = [...uniqueProducts];

      const arrUniqueRender = arrUniqueProducts
        .map((item) => arrItemsCart
          .find((i) => item === i.id));

      renderElements = arrUniqueRender.map(({ id, title, price, thumbnail }, index) => (
        <div key={ id } className="div-cart-item">
          <CartItem
            id={ id }
            title={ title }
            price={ price }
            thumbnail={ thumbnail }
            index={ index }
          />
        </div>
      ));
    }
    return renderElements;
  }

  render() {
    const { qtdItem, sumValue } = this.state;

    return (
      <div>
        <div className="div-btn-back">
          <Link to="/" className="btn-back">Voltar</Link>
        </div>
        <h1>Carrinho de compras</h1>
        <div className="div-more-info">
          <div className="div-product-cart">
            { this.handleItemCart() }
          </div>
          <div className="div-subtotal-cart">
            <p>{`Subtotal (${qtdItem}): R$ ${sumValue}`}</p>
          </div>
        </div>
      </div>
    );
  }
}
