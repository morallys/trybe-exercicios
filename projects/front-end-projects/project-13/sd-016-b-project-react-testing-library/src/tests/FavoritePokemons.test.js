import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente FavoritePokemons', () => {
  it('Testa se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const notFoundFavorites = screen.getByText(/no favorite pokemon found/i);
    expect(notFoundFavorites).toBeDefined();
  });

  it('Testa se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetails);

    const checkboxFavoritePokemon = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i });
    userEvent.click(checkboxFavoritePokemon);

    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavoritePokemons);

    const isPokemon = screen.getByText(/Pikachu/i);

    expect(isPokemon).toBeDefined();
  });
});
