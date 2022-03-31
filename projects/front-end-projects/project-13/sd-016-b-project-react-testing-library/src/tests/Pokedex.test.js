import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste a renderização do componente Pokedex em App', () => {
  it('Teste se página contém um heading h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const heading = screen.getByRole('heading', {
      level: 2, name: /Encountered pokémons/i });

    expect(heading).toBeDefined();
  });

  it('Teste se é mostrado o Próximo Pokemon ao clicar no botão Próximo Pokémon.', () => {
    renderWithRouter(<App />);
    const LAST_INDEX = 7;

    let atualPokemon = screen.getByText('Pikachu');
    expect(atualPokemon.innerHTML).toBe('Pikachu');

    const btnProximoPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(btnProximoPokemon);
    atualPokemon = screen.getByText('Charmander');
    expect(atualPokemon.innerHTML).toBe('Charmander');

    // console.log(atualPokemon.innerHTML);
    for (let index = 0; index < LAST_INDEX; index += 1) {
      userEvent.click(btnProximoPokemon);
    }

    atualPokemon = screen.getByText('Dragonair');
    // console.log(atualPokemon.innerHTML);
    if (atualPokemon.innerHTML === 'Dragonair') {
      userEvent.click(btnProximoPokemon);
      // console.log(atualPokemon.innerHTML);

      expect(atualPokemon.innerHTML).toBe('Pikachu');
    }
  });

  it('Testa se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);

    const atualPokemon = screen.getByText('Pikachu');

    expect(atualPokemon.innerHTML).toBe('Pikachu');
    expect(atualPokemon.innerHTML).not.toBe('Charmander');
    expect(atualPokemon.innerHTML).not.toBe('Caterpie');
  });

  it('Teste se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);

    const allBTN = screen.getByRole('button', { name: /all/i });
    const electricBTN = screen.getByRole('button', { name: /electric/i });
    const fireBTN = screen.getByRole('button', { name: /fire/i });
    const bugBTN = screen.getByRole('button', { name: /bug/i });
    const poisonBTN = screen.getByRole('button', { name: /poison/i });
    const psychicBTN = screen.getByRole('button', { name: /psychic/i });
    const normalBTN = screen.getByRole('button', { name: /normal/i });
    const dragonBTN = screen.getByRole('button', { name: /dragon/i });
    const nextPokemonBTN = screen.getByRole('button', { name: /próximo pokémon/i });

    expect(allBTN).toBeDefined();

    const arrBtnsPokemon = [
      electricBTN, fireBTN, bugBTN, poisonBTN, psychicBTN, normalBTN, dragonBTN];

    const btnToBeDefined = arrBtnsPokemon.every((pokemon) => pokemon);

    expect(btnToBeDefined).toBe(true);

    // verifica se os botões possuem o atributo 'pokemon-type-button'

    arrBtnsPokemon.forEach((btn) => {
      expect(btn).toHaveAttribute('data-testid', 'pokemon-type-button');
    });

    // Teste do botão de tipo

    userEvent.click(electricBTN);
    const electricPokemon = screen.getByText('Pikachu');

    expect(electricPokemon.innerHTML).toBe('Pikachu');
    expect(nextPokemonBTN).toBeDisabled();

    userEvent.click(fireBTN);
    let firePokemon = screen.getByText('Charmander');
    expect(firePokemon).toBeInTheDocument();
    expect(nextPokemonBTN).toBeEnabled();

    userEvent.click(nextPokemonBTN);
    firePokemon = screen.getByText('Rapidash');

    expect(firePokemon).toBeInTheDocument();
    expect(firePokemon.innerHTML).toBe('Rapidash');

    // o Texto dos botões devem corresponder ao tipo do pokemon
    userEvent.click(psychicBTN);

    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.innerHTML).toBe('Psychic');

    // Reseta a aplicação ao estado inicial
    userEvent.click(allBTN);
    expect(allBTN).toBeDefined();
  });
});
