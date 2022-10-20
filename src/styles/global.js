import { createGlobalStyle } from "styled-components";
import spaceXBackground from "../assets/spacex-background.jpg";

const GlobalStyle = createGlobalStyle`
    :root {
        /* COLORS */
        --color-primary: #FDD6B6;
        --color-primary-dark: #8E2828;
        
        --color-utility-success: #95C06E;
        --color-utility-danger: #D77B7B;
        
        --color-grey: #C1C1C1;
        --color-grey-dark: #969696;
        
        --color-black: #303030;
        --color-black-dark: #030202;
    }
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    body {
        background-image: url(${spaceXBackground});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        transition: .3s;
    }

    /* SCROLLBAR  */
    ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-primary-dark);
    }
`;

export default GlobalStyle;
