import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-family: "Share Tech Mono", monospace;
        scroll-behavior: smooth;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.navyBlue};
        font-size: 12px;  
    }
    body {
        height: 200vh;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.green};
        transition: "all 250ms ease-in-out";

        &:hover{
                color:  ${({ theme }) => theme.colors.orange};
        }
    }

    ul {
        list-style: none;
    }
    
    hr{
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.orange} 0%,
            ${({ theme }) => theme.colors.purple} 100%
        );
        border:0;
        height: 1px
    }
`;
