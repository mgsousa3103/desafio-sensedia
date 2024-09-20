import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  it('should render the Loading component', () => {
    render(<Loading />);

    const loadingContainer = screen.getByTestId('loading');
    expect(loadingContainer).toBeInTheDocument();

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
