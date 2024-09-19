import { Suspense, lazy, useCallback } from 'react';
import { Container } from '../../components/atoms/Layout.style';
import { useSearch, useUsers, useViewToggle } from '../../hooks';

import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';

// Importacao Assincrona
const Header = lazy(() => import('../../components/Header/Header'));
const SearchBar = lazy(() => import('../../components/SearchBar/SearchBar'));
const UserDisplay = lazy(
  () => import('../../components/UserDisplay/UserDisplay'),
);

const Home = () => {
  const { users, isLoading, error } = useUsers();
  const { searchTerm, setSearchTerm, filteredUsers } = useSearch(users);
  const { isCardView, toggleView } = useViewToggle();

  // const debouncedSearch = useCallback((value: string) => {
  //     setSearchTerm(value);
  // }, [])

  // const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //     debouncedSearch(e.target.value)
  // }, [debouncedSearch]);

  if (isLoading)
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  if (error) return <ErrorPage />;

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Header isCardView={isCardView} onToggle={toggleView} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SearchBar
          term={searchTerm}
          onSearch={(e) => setSearchTerm(e.target.value)}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <UserDisplay users={filteredUsers} isCardView={isCardView} />
      </Suspense>
    </Container>
  );
};

export default Home;
