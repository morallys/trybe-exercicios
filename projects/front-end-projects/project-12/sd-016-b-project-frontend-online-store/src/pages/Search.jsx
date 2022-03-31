import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import '../css/Search.css';
import Card from '../components/Card';
import CartImg from '../components/CartImg';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      queryProducts: [],
      inputQuery: '',
    };

    this.handleCategories = this.handleCategories.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCards = this.handleCards.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    const objCategories = await getCategories();

    this.setState({
      categories: objCategories,
    });
  }

  handleQuery(e) {
    this.setState({
      inputQuery: e.target.value,
    });
  }

  async handleClick() {
    const { inputQuery } = this.state;

    const querySearch = await getProductsFromCategoryAndQuery(null, inputQuery);

    this.setState({
      queryProducts: querySearch,
    });
  }

  handleCards(query) {
    let expressionJSX = '';

    if (query.length === 0) expressionJSX = null;
    else if (query.results.length !== 0) expressionJSX = <Card query={ query } />;
    else if (query.results.length === 0) {
      expressionJSX = <span>Nenhum produto foi encontrado</span>;
    }

    return expressionJSX;
  }

  async handleClickCategories(e) {
    const { categories } = this.state;

    const categorie = categories.find((categ) => categ.name === e.target.text);

    const querySearch = await getProductsFromCategoryAndQuery(categorie.id, null);

    this.setState({
      queryProducts: querySearch,
    });
  }

  render() {
    const { categories, inputQuery, queryProducts } = this.state;

    return (
      <>
        <div className="header">
          <h3
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <div className="header-block">
            <input
              type="text"
              name=""
              className="query-input"
              data-testid="query-input"
              value={ inputQuery }
              onChange={ this.handleQuery }
            />
            <button
              type="submit"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>

            <CartImg />
          </div>
        </div>
        <div className="div-main">
          <div className="div-categories">
            {categories.map((categ) => (
              <div key={ categ.id } className="div-categorie-link">
                <Link
                  className="categorie-link"
                  to="/"
                  onClick={ this.handleClickCategories }
                  data-testid="category"
                >
                  { categ.name }
                </Link>
              </div>))}
          </div>
          <div className="div-query-products">
            { this.handleCards(queryProducts) }
          </div>
        </div>
      </>
    );
  }
}
