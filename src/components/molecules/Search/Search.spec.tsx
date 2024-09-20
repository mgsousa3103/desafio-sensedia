import { fireEvent, render, screen } from '@testing-library/react';
import type { SearchProps } from '../../../types/search-bar.types';
import { areEqual } from '../../../utils/utils';
import Search from './Search';

vi.mock('../../../utils/utils.ts', () => ({
  areEqual: vi.fn(),
}));

describe('Search Component', () => {
  const onSearchMock = vi.fn();
  const defaultProps: SearchProps = {
    ariaLabel: 'Search for users',
    text: 'Search for users',
    term: '',
    onSearch: onSearchMock,
  };

  it('should render the input search  with the correct props', () => {
    render(<Search {...defaultProps} />);

    const input = screen.getByLabelText('Search for users');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search for users');
    expect(input).toHaveAttribute('value', '');
  });

  it('should call the onSearch prop when the input value changes', () => {
    render(<Search {...defaultProps} />);

    const input = screen.getByLabelText('Search for users');
    fireEvent.change(input, { target: { value: 'John' } });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('should not re-render the component if the props have not changed', () => {
    const { rerender } = render(<Search {...defaultProps} />);

    onSearchMock.mockClear();

    rerender(<Search {...defaultProps} />);
    expect(areEqual).toHaveBeenCalledTimes(1);
    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it('should re-render the component if the props have changed', () => {
    const { rerender } = render(<Search {...defaultProps} />);

    rerender(<Search {...defaultProps} term="John" />);
    const input = screen.getByLabelText('Search for users');
    expect(input).toHaveValue('John');
  });
});
