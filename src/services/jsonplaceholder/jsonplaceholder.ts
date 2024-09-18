import axios from 'axios';
import { IPlaceholderUser } from './jsonplaceholder.interface';

export const fetchAllUsers = async () => {
  const { data } = await axios.get<IPlaceholderUser[]>(
    'https://jsonplaceholder.typicode.com/users',
  );
  return data;
};
