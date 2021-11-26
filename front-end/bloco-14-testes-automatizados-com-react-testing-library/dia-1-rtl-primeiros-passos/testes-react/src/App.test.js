import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Testa campo input e botões', () => {
  it('Verifica se existe o input Email', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");

    // interagir com os elementos (se for necessário)
    // fazer os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it('Verifica se existe o botão "Enviar"', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputBtn = screen.getByTestId('id-send');
    // interagir com os elementos (se for necessário)
    // fazer os testes
    expect(inputBtn).toBeInTheDocument();
    expect(inputBtn).toHaveProperty('type', 'button');
    expect(inputBtn).toHaveValue('Enviar');
  })

  it('Verifica se existem dois botões "Enviar" e "Voltar"', () => {
    // Acessar os elementos da tela
    render(<App />);
    const inputBtn = screen.getAllByRole('button');
    // interagir com os elementos (se for necessário)
    // fazer os testes
    expect(inputBtn).toHaveLength(2);
  })

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);

    const USER_EMAIL = 'email@email.com';

    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, USER_EMAIL);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ USER_EMAIL }`);

  })
});

// Acessar os elementos da tela
// interagir com os elementos (se for necessário)
// fazer os testes