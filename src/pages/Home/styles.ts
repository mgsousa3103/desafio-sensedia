import { ToggleButton, Input } from 'react-aria-components';
import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    min-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 8px rgba(147, 89, 247, 0.05);
    background: var(--White-Light);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex: 1 1 0;
    align-self: stretch;
`;

export const SectionRow = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: center;
   align-content: center;
   row-gap: 16px;
   align-self: stretch;
   flex-wrap: wrap;
`;

export const Wrapper = styled.div<{ type: 'column' | 'row' }>`
    display: flex;
    gap: 8px;

    flex-direction: ${({ type }) => (type === 'column' ? 'column' : 'row')};
    align-items: ${({ type }) => (type === 'column' ? 'flex-start' : 'center')};
`;

export const Title = styled.h2`
    color: var(--Grape);

    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 45.9px;
`;

export const Subtitle = styled.h3`
    color: var(--Strong-Grey);

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 21.6px;
`;

export const Paragraph = styled.p`
    color: var(--Strong-Grey);

    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
`;

export const Toggled = styled(ToggleButton)`
    background-color: var(--White);
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    cursor: pointer;
`;

export const SearchInput = styled(Input)`
    width: 100%;
    min-width: 336px;
    height: 44px;
    padding: 0px 16px;
    border-radius: 8px;
    border: 1px solid var(--Grey);
    background-color: var(--White);
    font-size: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    gap: 32px
`;
