import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/Card.css';
import ButtonAddCart from './ButtonAddCart';

export default class Card extends Component {
  render() {
    const { query } = this.props;
    const { results } = query;

    return (
      results.map((product) => (
        <div className="card-product" data-testid="product" key={ product.id }>
          <Link
            to={ `/details/${product.id}` }
            data-testid="product-detail-link"
            className="product-link"
          >
            <div className="div-title">
              <span>{product.title}</span>
            </div>
            <div className="div-more-infos">
              <span className="span-price-product">
                { 'R$ ' }
                { product.price }
              </span>
              <img src={ product.thumbnail } alt={ product.title } className="img-card" />
            </div>
          </Link>
          <ButtonAddCart dataTestid="product-add-to-cart" product={ product } />
        </div>
      ))
    );
  }
}

Card.propTypes = {
  query: PropTypes.objectOf(PropTypes.any).isRequired,
};
