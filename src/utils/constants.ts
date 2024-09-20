import type { IPlaceholderUser } from '../types/jsonplaceholder.types';

export const mockUsersData: IPlaceholderUser[] = [
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
  {
    id: 2,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'janedoe@example.com',
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
  {
    id: 3,
    name: 'Bob Doe',
    username: 'bobdoe',
    email: 'bobdoe@example.com',
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
