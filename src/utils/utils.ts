import type { IPlaceholderUser, SearchProps } from '../types/types';

export const filterUsers = (users: IPlaceholderUser[], searchTerm: string) => {
  if (!searchTerm.trim()) return users;

  const lowerCaseTerm = searchTerm.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().includes(lowerCaseTerm),
  );
};

export const areEqual = (prevProps: SearchProps, nextProps: SearchProps) => {
  return (
    prevProps.term === nextProps.term &&
    prevProps.onSearch === nextProps.onSearch
  );
};
