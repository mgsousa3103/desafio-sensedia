import type React from 'react';
import { Suspense, lazy } from 'react';
import Loading from '../../components/Loading/Loading';
import { SectionColumn, SectionRow } from '../../components/atoms/Layout.style';

const Search = lazy(() => import('../../components/Search/Search'));

const SearchBar = ({
  term,
  onSearch,
}: {
  term: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <SectionRow>
        <SectionColumn>
          <Search
            ariaLabel="Pesquisa usuários por nome"
            text="Pesquisar por nome"
            term={term}
            onSearch={onSearch}
          />
        </SectionColumn>
      </SectionRow>
    </Suspense>
  );
};

export default SearchBar;
