import { Suspense, lazy } from 'react';
import type { SearchBarProps } from '../../../types/search-bar.types';
import { SectionColumn, SectionRow } from '../../atoms/Layout.style';
import Loading from '../../molecules/Loading/Loading';

const Search = lazy(() => import('../../molecules/Search/Search'));

const SearchBar = ({ term, onSearch }: SearchBarProps) => {
  return (
    <Suspense fallback={<Loading />} data-testid="search-bar">
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
