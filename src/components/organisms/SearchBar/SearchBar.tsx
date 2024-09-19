import type React from 'react';
import { Suspense, lazy } from 'react';
import Loading from '../../molecules/Loading/Loading';
import { SectionColumn, SectionRow } from '../../atoms/Layout.style';
import { SearchBarProps } from '../../../types/search-bar.types';

const Search = lazy(() => import('../../molecules/Search/Search'));

const SearchBar = ({ term, onSearch, }: SearchBarProps) => {
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
