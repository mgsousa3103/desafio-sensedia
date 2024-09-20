import { act, render, screen } from '@testing-library/react';
import type { SearchBarProps } from '../../../types/search-bar.types';
import SearchBar from './SearchBar';

vi.mock('../../molecules/Search/Search', () => ({
  default: () => <div data-testid="search-bar">Search component</div>,
}));

vi.mock('../../molecules/Loading/Loading', () => ({
  default: () => <div data-testid="loading">Loading...</div>,
}));

describe('SearchBar Component', () => {
  const defaultProps: SearchBarProps = {
    term: '',
    onSearch: vi.fn(),
  };

  it('should render loading component when the component is loading', () => {
    act(() => {
      render(<SearchBar {...defaultProps} />);
    });

    const loadingContainer = screen.getByTestId('loading');
    expect(loadingContainer).toBeInTheDocument();
    expect(loadingContainer).toHaveTextContent('Loading...');
  });

  it('should render the search component when the component is not loading', () => {
    act(() => {
      render(<SearchBar {...defaultProps} />);
    });

    const searchContainer = screen.getByTestId('search-bar');
    expect(searchContainer).toBeInTheDocument();
    expect(searchContainer).toHaveTextContent('Search component');
  });
});
