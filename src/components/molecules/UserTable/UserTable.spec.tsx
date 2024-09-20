import { render, screen } from '@testing-library/react';
import type { IPlaceholderUser } from '../../../types/jsonplaceholder.types';
import { columns } from '../../../utils/table-columns';
import UserTable from './UserTable';

vi.mock('../UserNotFound/UserNotFound', () => ({
  default: () => <div data-testid="user-not-found">UserNotFound</div>,
}));

vi.mock('../../../utils/table-columns.ts', () => ({
  columns: [
    { id: 'name', name: 'Name', isRowHeader: true },
    { id: 'email', name: 'Email' },
    { id: 'phone', name: 'Phone' },
  ],
}));

describe('UserTable Component', () => {
  const userMocked: IPlaceholderUser[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt. 123',
        city: 'New York',
        zipcode: '12345',
        geo: {
          lat: '40.7128',
          lng: '-74.0060',
        },
      },
      phone: '1-212-555-1234',
      website: 'http://example.com',
      company: {
        name: 'ACME Corporation',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'strategy deploy e-markets',
      },
    },
  ];

  it('should render UserNotFound component when the users array is empty', () => {
    render(<UserTable users={[]} />);

    const userNotFoundEl = screen.getByTestId('user-not-found');
    expect(userNotFoundEl).toBeInTheDocument();
    expect(userNotFoundEl).toHaveTextContent('UserNotFound');
  });

  it('should render the UserTable when the users array is not empty', () => {
    render(<UserTable users={userMocked} />);

    const userTableContainer = screen.getByTestId('user-table');
    expect(userTableContainer).toBeInTheDocument();
  });

  it('should render the UserTable with the correct columns', () => {
    render(<UserTable users={userMocked} />);

    columns.forEach((column) => {
      const headerEl = screen.getByText(column.name);
      expect(headerEl).toBeInTheDocument();
    });
  });
});
