import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
        font-family: 'Poppins', sans-serif;
    }

    body {
        height: 100%;
        background-image: linear-gradient(to bottom, #020917, #101725);
        font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
    }

    body {
        color: #fff;
        font-size: 14px;
        font-style: normal;
    }

    button {
        cursor: pointer;
    }
`

export default GlobalStyle;