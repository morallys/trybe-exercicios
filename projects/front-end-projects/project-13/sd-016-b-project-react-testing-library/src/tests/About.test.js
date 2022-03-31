import React from 'react';
import { screen } from '@testing-library/react';

import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a página contém as informações sobre a Pokédex.', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const heading = screen.getByRole('heading', { level: 2, name: /Pokédex/i });
    expect(heading).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const paragraph1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragraph2 = screen.getByText(/One can filter Pokémons by type/i);

    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  it('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', imgURL);
  });
});
