import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { reloadPage } from '../../utils/utils';
import ErrorPage from './ErrorPage';

vi.mock('../../utils/utils.ts', () => ({
  reloadPage: vi.fn(),
}));

describe('ErrorPage', () => {
  it('should render the ErrorPage component', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

  it('should render the title and the subtitle correctly', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );

    expect(
      screen.getByText('Ops! Erro ao carregar a página.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Não conseguimos carregar a página devido a um erro no servidor ou talvez esta página não exista. Tente novamente mais tarde.',
      ),
    ).toBeInTheDocument();
  });

  it('should render the reload button correctly and call the reload method', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );

    act(() => {
      screen.getByText('Recarregar').click();
    });

    expect(screen.getByText('Recarregar')).toBeInTheDocument();
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });

  it('should render the back button correctly', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>,
    );
    const backButton = screen.getByText('Voltar para a página inicial');
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/');
  });
});
