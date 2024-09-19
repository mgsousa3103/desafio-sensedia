/* 
  1. Deve retornar uma lista de usuarios
  2. Deve exibir erro no console caso a requisição falhe
*/
import axios from 'axios';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import { fetchAllUsers } from './jsonplaceholder';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchAllUsers', () => {
  it('should return a list of users', async () => {
    const mockData: IPlaceholderUser[] = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        address: {
          street: '123 Main St',
          suite: 'Apt. 123',
          city: 'New York',
          zipcode: '12345',
          geo: {
            lat: '40.7128',
            lng: '-74.0060',
          },
        },
        phone: '1-212-555-1234',
        website: 'http://example.com',
        company: {
          name: 'ACME Corporation',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          bs: 'strategy deploy e-markets',
        },
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockData });

    const users = await fetchAllUsers();
    expect(users).toEqual(mockData);
  });

  it('should log an error', async () => {
    const errorMsg = 'Erro ao buscar usuários: Erro de teste';
    mockedAxios.get.mockRejectedValue(new Error(errorMsg));

    const consoleSpy = vi.spyOn(console, 'error');

    await fetchAllUsers();
    expect(consoleSpy).toHaveBeenCalledWith(
      `Erro ao buscar usuários: ${errorMsg}`,
    );
  });
});
