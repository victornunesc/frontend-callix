import { createGlobalStyle } from "styled-components";
import spaceXBackground from "../assets/spacex-background.jpg";

const GlobalStyle = createGlobalStyle`
    :root {
        /* COLORS */
        --color-primary: #F5F5F5;
        --color-primary-dark: #95A0AA;
        --color-secondary: #F08927;

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
        background-color: var(--color-black);
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        transition: .3s;
        background-position: center;
    }

    /* SCROLLBAR  */
    ::-webkit-scrollbar {
        width: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-primary-dark);
    }
`;

export default GlobalStyle;
