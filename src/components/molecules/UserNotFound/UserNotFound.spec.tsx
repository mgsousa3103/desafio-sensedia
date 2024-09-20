import { render, screen } from '@testing-library/react';
import UserNotFound from './UserNotFound';

describe('UserNotFound Component', () => {
  it('should render the UserNotFound component', () => {
    render(<UserNotFound />);

    const userNotFoundContainer = screen.getByTestId('user-not-found');
    expect(userNotFoundContainer).toBeInTheDocument();

    const title = screen.getByText('Sem resultados!');
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(
      'Não encontramos nenhum resultado com os termos da sua busca. Que tal tentar algo diferente?',
    );
    expect(subtitle).toBeInTheDocument();
  });
});
