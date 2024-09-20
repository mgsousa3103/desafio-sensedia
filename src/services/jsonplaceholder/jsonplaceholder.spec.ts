import axios from 'axios';
import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import { mockUsersData } from '../../utils/constants';
import { fetchAllUsers } from './jsonplaceholder';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchAllUsers', () => {
  it('should return a list of users', async () => {
    const mockData: IPlaceholderUser[] = mockUsersData;

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
