import { Input } from 'react-aria-components';
import styled from 'styled-components';
import { media } from '../../utils/media-queries';

export const SearchInput = styled(Input)`
    width: 100%;
    height: 2.75rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 0.125rem solid var(--Grey);
    background-color: var(--White);
    color: var(--Strong-Grey);
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    align-self: self-start;

    @media ${media.tablet}{
        max-width: 21rem; // 338px
    }
`;
