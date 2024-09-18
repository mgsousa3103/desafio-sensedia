import React from 'react';
import { SearchInput } from './Search.style';

type SearchProps = {
    ariaLabel: string,
    text: string,
    term: string,
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const Search = ({ ariaLabel, text, term, onSearch }: SearchProps) => {
    return (
        <SearchInput
            aria-label={ariaLabel}
            placeholder={text}
            value={term}
            onChange={onSearch}
        />
    );
};

export default Search;
