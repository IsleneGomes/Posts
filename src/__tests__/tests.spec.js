import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
// import Home from '../pages/Home/index'
import Header from '../pages/Home/components/Header/index'

describe('Testa o componente App.js', () => {
  test('Testa se existe um botão Entrar na tela de login', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const button = getByText(/Entrar/i);
    expect(button).toBeDefined();
  });

  test('O botão deve redirecionar para a página principal', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    const textHome = getByRole('button', { name: 'Entrar' });
    fireEvent.click(textHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/home');
    
  });
});

describe('Testa componente Home', () => {
  test('Teste se a página contém um heading h2 com o texto Volte Sempre.', () => {
    const { getByRole, history, getByText } = renderWithRouter(<App />);
    const textHome = getByRole('button', { name: 'Entrar' });
    fireEvent.click(textHome);
    const url = history.location.pathname;
    expect(url).toBe('/home');

    const tagh2 = getByText('Volte Sempre');
    expect(tagh2).toBeInTheDocument();
  });

  test('É exibido o component New quando o botão Novo Post é clicado é clicado', () => {
    const { getByRole } = renderWithRouter(
      <Header />,
    );
    // Existe um botão com o nome Novo Post
    const button = getByRole('button', {
      name: /NOVO POST/i,
    });
    expect(button).toBeInTheDocument();

    // Existe um botão CARREGAR IMAGEM
    const buttonImg = getByRole('button', {
      name: /CARREGAR IMAGEM/i,
    });
    expect(buttonImg).toBeInTheDocument();

  });

  test('Teste se existe um botão PUBLICAR.', () => {
    const { getByRole } = renderWithRouter(
      <App />,
    );
    const publicar = getByRole('button', { name: 'Publicar' });
    expect(publicar).toBeInTheDocument();
  });
});
