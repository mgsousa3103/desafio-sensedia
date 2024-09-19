/* 
  1. Deve retornar os usuarios corretamente quando a requisição for bem sucedida
*/

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type React from 'react';
import { fetchAllUsers } from '../../services/jsonplaceholder/jsonplaceholder';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import useUsers from '../useUsers';

vi.mock('../../services/jsonplaceholder/jsonplaceholder', () => ({
  fetchAllUsers: vi.fn(),
}));

describe('useUsers Hook', () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should return users correctly when the request is successful', async () => {
    const mockData: IPlaceholderUser[] = [
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

    (fetchAllUsers as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useUsers(), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });
});
