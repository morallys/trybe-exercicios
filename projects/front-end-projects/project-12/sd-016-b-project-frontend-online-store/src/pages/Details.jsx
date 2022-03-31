import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getProductId } from '../services/api';

import '../css/Details.css';
import CartImg from '../components/CartImg';
import ButtonAddCart from '../components/ButtonAddCart';

export default class Details extends Component {
  constructor() {
    super();

    this.state = {
      productDetail: '',
    };

    this.handleProduct = this.handleProduct.bind(this);
    this.handleAttributes = this.handleAttributes.bind(this);
  }

  componentDidMount() {
    this.handleProduct();
  }

  async handleProduct() {
    const { match: { params: { id } } } = this.props;

    const productDetail = await getProductId(id);

    this.setState({
      productDetail,
    });
  }

  handleAttributes() {
    const { productDetail } = this.state;
    const { attributes } = productDetail;

    if (attributes) {
      return attributes.map((attr) => (
        <li key={ attr.id }>
          { attr.name }
          { attr.value_name ? ` - ${attr.value_name}` : null }
          { }
        </li>
      ));
    }
  }

  render() {
    const { productDetail } = this.state;
    const {
      base_price: basePrice,
      thumbnail,
      title,
      warranty,
    } = productDetail;

    return (
      <div className="div-details">
        <div className="div-btn-back">
          <Link to="/" className="btn-back">Voltar</Link>
        </div>
        <div className="div-cart">
          <CartImg />
        </div>
        <div className="div-info-details">
          <div className="div-detail">
            <span
              data-testid="product-detail-name"
              className="product-detail-name"
            >
              { title }
            </span>
            <span className="span-price">
              { 'R$ '}
              { basePrice }
            </span>
            <img src={ thumbnail } alt={ title } className="thumbnail" />
            <span className="warranty">{ warranty }</span>
            { productDetail ? (
              <ButtonAddCart
                dataTestid="product-detail-add-to-cart"
                product={ productDetail }
              />
            ) : null }

          </div>
          <hr />
          <div className="attributes-details">
            <span><strong>Especificações Técnicas</strong></span>
            <ul>
              { this.handleAttributes() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
