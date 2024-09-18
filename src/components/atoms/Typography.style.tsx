import styled from 'styled-components';

export const Title = styled.h2<{ orientation?: 'left' | 'right' | 'center' }>`
    width: 100%;
    color: var(--Royal-Purple-Light);

    font-family: 'Montserrat', sans-serif;
    font-size: 1.625rem; // 26px
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    text-align: ${({ orientation }) => (orientation ? orientation : 'left')};
`;

export const Subtitle = styled.h3 <{ orientation?: 'left' | 'right' | 'center' }>`
    width: 100%;
    color: var(--Strong-Grey);

    font-family: 'Montserrat', sans-serif;
    font-size: 1rem; // 16px
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: ${({ orientation }) => (orientation ? orientation : 'left')};
`;

export const Paragraph = styled.p<{ orientation?: 'left' | 'right' | 'center' }>`
    color: var(--Strong-Grey);

    font-family: 'Montserrat', sans-serif;
    font-size: 0.625rem; // 10px
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    text-align: ${({ orientation }) => (orientation ? orientation : 'left')};
`;
