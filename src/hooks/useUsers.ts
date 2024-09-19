import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../services/jsonplaceholder/jsonplaceholder';

const useUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    users: data || [],
    isLoading,
    error,
  };
};

export default useUsers;
