import { ToggleButton, Input } from 'react-aria-components';
import styled from 'styled-components';

const sizes = {
    mobile: "30rem", // 480px
    tablet: "48rem", // 768px
    desktop: "64rem" // 1024px
}

const media = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`
}

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

export const SectionColumn = styled.div<{ orientation?: 'column' | 'row', justify?: 'flex-start' | 'flex-end' | 'center' }>`
    width: 100%;
    display: flex;
    flex-direction: ${({ orientation }) => (orientation ? orientation : 'column')};
    justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
    align-items: center;
    gap: 0.5rem;
`;

export const Title = styled.h2`
    width: 100%;
    color: var(--Royal-Purple-Light);

    font-family: 'Montserrat', sans-serif;
    font-size: 1.625rem; // 26px
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
`;

export const Subtitle = styled.h3`
    width: 100%;
    color: var(--Strong-Grey);

    font-family: 'Montserrat', sans-serif;
    font-size: 1rem; // 16px
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
`;

export const Paragraph = styled.p`
    color: var(--Strong-Grey);

    font-family: 'Montserrat', sans-serif;
    font-size: 0.625rem; // 10px
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
`;

export const Toggled = styled(ToggleButton)`
    background-color: var(--White);
    border: none;
    border-radius: 0.5rem;
    padding: 0.375rem  0.625rem;
    cursor: pointer;
`;

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

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    gap: 2rem
`;
