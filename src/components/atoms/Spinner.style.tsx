import styled from 'styled-components';

export const Spinner = styled.div`
    border: 0.25rem solid var(--Grey);
    border-radius: 50%;
    border-top: 0.25rem solid var(--Royal-Purple-Light);
    width: 2rem;
    height: 2rem;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 0 auto;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
