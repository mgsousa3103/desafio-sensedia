import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    min-width: 200px;
    max-width: 398px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    border-radius: 0.5rem;
    border: 1px solid var(--Grey);
    background-color: var(--White);
`;

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`;

export const CardText = styled.p<{ type: 'name' | 'email' | 'phone' }>`
font-style: normal;
font-family: "Montserrat", sans-serif;
 color: ${({ type }) => (type === 'name' ? 'var(--Purple-Light)' : 'var(--Strong-Grey)')};
    font-size: ${({ type }) => (type === 'name' ? '20px' : '14px')};
    font-weight: ${({ type }) => (type === 'name' ? '700' : '400')};
    line-height: ${({ type }) => (type === 'name' ? '29px' : '23.2px')};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex: 1 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;
