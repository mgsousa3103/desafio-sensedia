import axios from 'axios';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';

export const fetchAllUsers = async () => {
    try {
        // const source = axios.CancelToken.source();
        // const timeout = setTimeout(() => {
        //     source.cancel('Tempo de requisição excedido.');
        // }, 10000)

        const res = await axios.get<IPlaceholderUser[]>(
            'https://jsonplaceholder.typicode.com/users',
            {
                // cancelToken: source.token
            },
        );

        // clearTimeout(timeout);
        return res.data;
    } catch (error: any) {
        // eslint-disable-line no-unused-vars
        // if (axios.isCancel(error)) {
        //     throw new Error('Requisição cancelada: ' + error.message);
        // }
        // throw new Error('Erro ao buscar usuários: ' + error.message);
        console.error(`Erro ao buscar usuários: ${error.message}`);
    }
};
