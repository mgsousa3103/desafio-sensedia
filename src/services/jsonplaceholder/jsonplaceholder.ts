import axios from 'axios';
import type { IPlaceholderUser } from './jsonplaceholder.type';

export const fetchAllUsers = async () => {
  const { data } = await axios.get<IPlaceholderUser[]>(
    'https://jsonplaceholder.typicode.com/users',
  );
  return data;
};
