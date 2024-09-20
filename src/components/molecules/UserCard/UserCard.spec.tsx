import { render, screen } from '@testing-library/react';
import type { IPlaceholderUser } from '../../../types/jsonplaceholder.types';
import UserCard from './UserCard';

describe('UserCard Component', () => {
  const userMocked: IPlaceholderUser = {
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
  };

  it('should render the UserCard component', () => {
    render(<UserCard user={userMocked} />);

    const userTableContainer = screen.getByTestId('user-card');
    expect(userTableContainer).toBeInTheDocument();
  });

  it('should render the UserCard with the correct data', () => {
    render(<UserCard user={userMocked} />);

    const userCardEl = screen.getByTestId('user-card');

    expect(userCardEl).toHaveTextContent('John Doe');
    expect(userCardEl).toHaveTextContent('johndoe@example.com');
    expect(userCardEl).toHaveTextContent('1-212-555-1234');
  });
});
