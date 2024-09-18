import type { IPlaceholderUser } from '../services/jsonplaceholder/jsonplaceholder.type';

export const filterUsers = (users: IPlaceholderUser[], searchTerm: string) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
