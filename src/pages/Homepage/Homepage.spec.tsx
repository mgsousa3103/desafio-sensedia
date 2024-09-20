import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as hooks from '../../hooks';
import Homepage from './Homepage';

vi.mock('../../components/organisms/Header/Header', () => ({
  default: ({
    isCardView,
    onToggle,
  }: { isCardView: boolean; onToggle: () => void }) => (
    <div data-testid="header">
      <button type="button" aria-label="toggle-view" onClick={onToggle}>
        {isCardView ? 'Table View' : 'Card View'}
      </button>
    </div>
  ),
}));
vi.mock('../../components/organisms/SearchBar/SearchBar', () => ({
  default: () => <div data-testid="search-input">Search Bar Component</div>,
}));
vi.mock('../../components/organisms/UserDislpay/UserDislpay', () => ({
  default: () => <div data-testid="user-display">User Display Component</div>,
}));
vi.mock('../../components/molecules/Loading/Loading', () => ({
  default: () => <div data-testid="loading">Loading Component</div>,
}));
vi.mock('../ErrorPage/ErrorPage', () => ({
  default: () => <div data-testid="error-page">Error Page Component</div>,
}));

const useUsersMock = vi.spyOn(hooks, 'useUsers');
const useSearchMock = vi.spyOn(hooks, 'useSearch');
const useViewToggleMock = vi.spyOn(hooks, 'useViewToggle');

describe('Homepage', () => {
  it('should render the Loading component while the users are fetching', () => {
    useUsersMock.mockReturnValue({ users: [], isLoading: true, error: null });
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should render the ErrorPage component if there is an error when fetching the users', () => {
    useUsersMock.mockReturnValue({
      users: [],
      isLoading: false,
      error: new Error('Error fetching users'),
    });
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

  it('should render the Header, SearchBar and UserDisplay components after the users are loaded', () => {
    useUsersMock.mockReturnValue({ users: [], isLoading: false, error: null });
    useSearchMock.mockReturnValue({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      filteredUsers: [],
    });
    useViewToggleMock.mockReturnValue({
      isCardView: false,
      toggleView: vi.fn(),
    });
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    waitFor(() => {
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('search-bar')).toBeInTheDocument();
      expect(screen.getByTestId('user-display')).toBeInTheDocument();
    });
  });

  it('should toggle the way the users are displayed when the toggleView is called', async () => {
    const toggleViewMock = vi.fn();
    useUsersMock.mockReturnValue({ users: [], isLoading: false, error: null });
    useSearchMock.mockReturnValue({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      filteredUsers: [],
    });
    useViewToggleMock.mockReturnValue({
      isCardView: true,
      toggleView: toggleViewMock,
    });
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    const toggleButton = screen.getByLabelText('toggle-view');
    fireEvent.click(toggleButton);

    expect(toggleViewMock).toHaveBeenCalled();
  });
});
