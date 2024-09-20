import { act, renderHook } from '@testing-library/react';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import { mockUsersData } from '../../utils/constants';
import { filterUsers } from '../../utils/utils';
import useSearch from '../useSearch';

vi.mock('../../utils/utils', () => ({
  filterUsers: vi.fn(),
}));

describe('useSearch Hook', () => {
  const users: IPlaceholderUser[] = mockUsersData;

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
