import axios from 'axios';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';

export const fetchAllUsers = async () => {
  try {
    const res = await axios.get<IPlaceholderUser[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    return res.data;
  } catch (error: any) {
    console.error(`Erro ao buscar usuários: ${error.message}`);
  }
};
