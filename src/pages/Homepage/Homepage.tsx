import { Suspense, lazy, useCallback, useEffect } from 'react';
import { Container } from '../../components/atoms/Layout.style';
import { useSearch, useUsers, useViewToggle } from '../../hooks';

import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/molecules/Loading/Loading';
import useDebouncedEffect from '../../hooks/useDebouncedEffect';
import ErrorPage from '../ErrorPage/ErrorPage';

// Importacao Assincrona
const Header = lazy(() => import('../../components/organisms/Header/Header'));
const SearchBar = lazy(
  () => import('../../components/organisms/SearchBar/SearchBar'),
);
const UserDisplay = lazy(
  () => import('../../components/organisms/UserDisplay/UserDisplay'),
);

const Homepage = () => {
  const { users, isLoading, error } = useUsers();
  const { searchTerm, setSearchTerm, filteredUsers } = useSearch(users);
  const { isCardView, toggleView } = useViewToggle();

  // Recurso para persistir o termo de busca na URL
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setSearchTerm(query);
  }, [searchParams, setSearchTerm]);

  useDebouncedEffect(
    () => {
      if (searchTerm) {
        setSearchParams({ search: searchTerm });
      } else {
        setSearchParams({});
      }
    },
    [searchTerm, setSearchParams],
    500,
  );

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

export default Homepage;
