import styled from 'styled-components';

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
