import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --White: rgba(248, 248, 248, 1);
        --White-Light: rgba(252, 252, 252, 1);
        --Grey: rgba(196, 196, 196, 1);
        --Strong-Grey: rgba(76, 76, 76, 1);
        --Blue-Light: rgba(0, 195, 255, 1);
        --LCD-Blue: rgba(8, 116, 247, 1);
        --Orange: rgba(235, 96, 52, 1);
        --Light-Orange: rgba(242, 119, 70, 1);
        --Royal-Purple-Light: rgba(121, 47, 137, 1);
        --Purple-Light: rgba(135, 81, 173, 1);
        --Grape: #3F1061ff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        font-family: 'Montserrat', sans-serif;
        color: var(--Strong-Grey);
    }

    body {
        width: 100%;
        padding: 2.5rem;
        background: var(--White);
    }
    
    .brand-orange {
        color: var(--Orange);
    }

    .loading-container {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;
