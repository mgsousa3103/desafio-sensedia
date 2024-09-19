/* 
  1. Deve retornar o estado inicial
  2. Deve atualizar o 'searchTerm' corretamente
  3. Deve filtrar os usuários corretamente
  4. Deve chamar a 'filterUsers' corretamente
*/
import { act, renderHook } from '@testing-library/react';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import { filterUsers } from '../../utils/utils';
import useSearch from '../useSearch';

vi.mock('../../utils/utils', () => ({
  filterUsers: vi.fn(),
}));

describe('useSearch Hook', () => {
  const users: IPlaceholderUser[] = [
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
  ];

  it('should return the initial state', () => {
    const { result } = renderHook(() => useSearch(users));

    expect(result.current.searchTerm).toBe('');
  });

  it('should update searchTerm correctly', () => {
    const { result } = renderHook(() => useSearch(users));

    expect(result.current.searchTerm).toBe('');

    act(() => {
      result.current.setSearchTerm('john');
    });

    expect(result.current.searchTerm).toBe('john');
  });

  it('should filter users correctly based on searchTerm', () => {
    (filterUsers as jest.Mock).mockImplementation(
      (users: IPlaceholderUser[], searchTerm: string) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );

    const { result } = renderHook(() => useSearch(users));

    act(() => {
      result.current.setSearchTerm('john');
    });

    expect(result.current.filteredUsers).toEqual([users[0]]);
  });

  it('should call filterUsers correctly', () => {
    const { result } = renderHook(() => useSearch(users));

    act(() => {
      result.current.setSearchTerm('john');
    });

    expect(filterUsers).toHaveBeenCalledWith(users, 'john');
  });
});
