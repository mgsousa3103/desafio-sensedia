import React from 'react';
import type { SearchProps } from '../../../types/search-bar.types';
import { areEqual } from '../../../utils/utils';
import { SearchInput } from '../../atoms/Inputs.style';

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
