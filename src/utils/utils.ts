import { IPlaceholderUser } from '../services/jsonplaceholder/jsonplaceholder.interface';

export const filteredUsers = (
  users: IPlaceholderUser[],
  searchTerm: string,
) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
