import styled from 'styled-components';
import { media } from '../../utils/media-queries';

export const Container = styled.main`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1.25rem;
    border-radius: 1.25rem;
    box-shadow: 0px 0px 1.25rem 0.5rem rgba(147, 89, 247, 0.05);
    background: var(--White-Light);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1 1 0;
    align-self: stretch;

    @media ${media.tablet}{
        padding: 2rem
    }
`;

export const SectionRow = styled.section`
    width: 100%;
   display: flex;
   flex-direction: column;
   row-gap: 1rem;

   @media ${media.tablet}{
    flex-direction: row;
    justify-content: space-between;
   }
`;

export const SectionColumn = styled.div<{
  orientation?: 'column' | 'row';
  justify?: 'flex-start' | 'flex-end' | 'center';
}>`
    width: 100%;
    display: flex;
    flex-direction: ${({ orientation }) => (orientation ? orientation : 'column')};
    justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
    align-items: center;
    gap: 0.5rem;
`;

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
