import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testa o componente Pokemon.js', () => {
  it('Verifica se as informações do pokemon devem ser mostradas na tela', () => {
    renderWithRouter(<App />);

    pokemons.forEach((pokemon) => {
      const { name, type, averageWeight, image } = pokemon;
      const { measurementUnit, value } = averageWeight;
      const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
      // console.log(type);

      const namePokemon = screen.getByTestId('pokemon-type');
      const weightPokemon = screen.getByTestId('pokemon-weight');
      const imgPokemon = screen.getByRole('img');

      expect(screen.getByText(name)).toBeInTheDocument();
      expect(namePokemon.innerHTML).toBe(type);
      expect(`Average weight: ${value} ${measurementUnit}`).toBe(weightPokemon.innerHTML);
      expect(imgPokemon).toHaveAttribute('src', image);
      expect(imgPokemon).toHaveAttribute('alt', `${name} sprite`);

      userEvent.click(nextPokemon);
    });
  });

  it('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);
    const checkbox = screen.getByRole('checkbox', { name: /Pokémon/i });

    userEvent.click(checkbox);
    const favoriteImg = screen.getByRole('img', { name: /marked as favorite/i });
    expect(favoriteImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
