import { useMemo, useState } from 'react';
import type { IPlaceholderUser } from '../types/jsonplaceholder.types';
import { filterUsers } from '../utils/utils';

const useSearch = (users: IPlaceholderUser[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return filterUsers(users, searchTerm);
  }, [users, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredUsers,
  };
};

export default useSearch;
