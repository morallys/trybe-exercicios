import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação.',
  () => {
    it('O primeiro link deve possuir o texto "Home"', () => {
      renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      expect(link[0].innerHTML).toBe('Home');
    });

    it('O segundo link deve possuir o texto "About"', () => {
      renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      expect(link[1].innerHTML).toBe('About');
    });

    it('O terceiro link deve possuir o texto "Favorite Pokémons"', () => {
      renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      expect(link[2].innerHTML).toBe('Favorite Pokémons');
    });

    it('Testa o path "/" ao clicar no link "Home"', () => {
      const { history } = renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      userEvent.click(link[0]);

      const { pathname } = history.location;
      expect(pathname).toBe('/');
    });

    it('Testa o path "/About" ao clicar no link "About"', () => {
      const { history } = renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      userEvent.click(link[1]);

      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    });

    it('Testa o path "/favorites" ao clicar no link "Pokémons Favoritados"', () => {
      const { history } = renderWithRouter(<App />);
      const link = screen.getAllByRole('link');
      userEvent.click(link[2]);

      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });

    it('Testa se a aplicaççao é redirecionada para notfound', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/pagina-nao-encontrada/');

      const notFound = screen.getByRole('heading', { level: 2, name: /not found/i });
      expect(notFound).toBeInTheDocument();
    });
  });
