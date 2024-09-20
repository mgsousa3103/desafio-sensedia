import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import type React from 'react';
import { fetchAllUsers } from '../../services/jsonplaceholder/jsonplaceholder';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import { mockUsersData } from '../../utils/constants';
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
    const mockData: IPlaceholderUser[] = mockUsersData;

    (fetchAllUsers as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useUsers(), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });
});
