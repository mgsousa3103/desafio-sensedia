import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../services/jsonplaceholder/jsonplaceholder';

const useUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
  });

  return {
    users: data || [],
    isLoading,
    error,
  };
};

export default useUsers;
