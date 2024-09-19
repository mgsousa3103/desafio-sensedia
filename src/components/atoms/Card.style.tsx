import styled from 'styled-components';
import { media } from '../../utils/media-queries';

export const CardsGrid = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media ${media.tablet}{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto-fill, 1fr);
    }

    @media ${media.laptop}{
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${media.desktop}{
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    border-radius: 0.5rem;
    border: 1px solid var(--Grey);
    background-color: var(--White);
`;

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
`;

// Typography Card
export const CardText = styled.p<{ type: 'name' | 'email' | 'phone' }>`
font-style: normal;
font-family: "Montserrat", sans-serif;
 color: ${({ type }) => (type === 'name' ? 'var(--Purple-Light)' : 'var(--Strong-Grey)')};
    font-size: ${({ type }) => (type === 'name' ? '1.25rem' : '0.875rem')};
    font-weight: ${({ type }) => (type === 'name' ? '700' : '400')};
    line-height: ${({ type }) => (type === 'name' ? '2rem' : '1.5rem')};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex: 1 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;
