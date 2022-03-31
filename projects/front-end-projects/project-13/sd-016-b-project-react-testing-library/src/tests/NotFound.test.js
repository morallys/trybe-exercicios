import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testa o componente NotFound.js', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found;', () => {
    const { history } = renderWithRouter(<NotFound />);
    history.push('/pagina-nao-encontrada/');

    const headingNotFound = screen.getByRole('heading', {
      level: 2, name: /Page requested not found/i });

    expect(headingNotFound).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem com URL específica', () => {
    renderWithRouter(<NotFound />);

    const imgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const img = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i });
    expect(img).toHaveAttribute('src', imgURL);
  });
});
