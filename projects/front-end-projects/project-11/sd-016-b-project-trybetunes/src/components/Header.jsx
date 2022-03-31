import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      name: '',
    };

    this.fnGetUser = this.fnGetUser.bind(this);
  }

  componentDidMount() {
    this.fnGetUser();
  }

  // REVIEW - Chama fnGetUser() dentro de componentDidMount para renderizar na iniciação do Header. Realiza a lógica para renderizar em tela o Loading, trocando para true e depois setando pra falso quando retornar o resultado da chamada a getUser(). Após isso, realiza a chamada assíncrona de getUser para buscar o nome digitado que está salvo no localStorage, retornando para o span apenas o nome digitado fazendo com que ele seja exibido em todas as pages que o Header é chamado.

  fnGetUser() {
    this.setState({ loading: true },
      async () => {
        const user = await getUser();
        const { name } = user;
        this.setState({ loading: false, name });
      });
  }

  render() {
    const { loading, name } = this.state;

    return (
      <header data-testid="header-component">
        <div>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </div>
        <div>
          { loading ? (
            <Loading />) : <span data-testid="header-user-name">{ name }</span> }
        </div>
      </header>
    );
  }
}
