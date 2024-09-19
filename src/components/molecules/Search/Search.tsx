import React from 'react';
import { SearchInput } from '../../atoms/Inputs.style';
import { areEqual } from '../../../utils/utils';
import { SearchProps } from '../../../types/search-bar.types';

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

export default React.memo(Search, areEqual);
