import styled from "styled-components";
import { media } from "../../utils/media-queries";

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media ${media.tablet}{
        height: 80vh;
    }
`

export const Spinner = styled.div`
    border: 0.5rem solid var(--Grey);
    border-radius: 50%;
    border-top: 8px solid var(--Royal-Purple-Light);
    width: 64px;
    height: 64px;
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