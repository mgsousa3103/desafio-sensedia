import { render, screen } from '@testing-library/react';
import type { UserDisplayProps } from '../../../types/user-display.types';
import { mockUsersData } from '../../../utils/constants';
import UserDisplay from './UserDisplay';

vi.mock('../../molecules/UserCard/UserCard', () => ({
  default: ({ user }: { user: { id: number } }) => (
    <div data-testid="user-card">{`UserCard: ${user.id}`}</div>
  ),
}));

vi.mock('../../molecules/UserNotFound/UserNotFound', () => ({
  default: () => <div data-testid="user-not-found">UserNotFound</div>,
}));

vi.mock('../../molecules/UserTable/UserTable', () => ({
  default: ({ users }: { users: { id: number }[] }) => (
    <div data-testid="user-table">{`UserTable with ${users.length} users`}</div>
  ),
}));

describe('UserDisplay Component', () => {
  const defaultProps: UserDisplayProps = {
    users: [],
    isCardView: false,
  };

  it('should render UserNotFound component when the users array is empty', () => {
    render(<UserDisplay {...defaultProps} />);

    const userNotFoundEl = screen.getByTestId('user-not-found');
    expect(userNotFoundEl).toBeInTheDocument();
    expect(userNotFoundEl).toHaveTextContent('UserNotFound');
  });

  it('should render UserCard when isCardView is true', () => {
    const props: UserDisplayProps = {
      users: mockUsersData,
      isCardView: true,
    };

    render(<UserDisplay {...props} />);

    const userCardEl = screen.getAllByTestId('user-card');
    expect(userCardEl).toHaveLength(3);
    expect(userCardEl[0]).toHaveTextContent('UserCard: 1');
    expect(userCardEl[1]).toHaveTextContent('UserCard: 2');
    expect(userCardEl[2]).toHaveTextContent('UserCard: 3');
  });

  it('should render UserTable when isCardView is false', () => {
    const props: UserDisplayProps = {
      users: mockUsersData,
      isCardView: false,
    };

    render(<UserDisplay {...props} />);

    const userTableEl = screen.getByTestId('user-table');
    expect(userTableEl).toBeInTheDocument();
    expect(userTableEl).toHaveTextContent('UserTable with 3 users');
  });
});
