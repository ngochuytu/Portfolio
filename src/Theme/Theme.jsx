import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --padding-horizontal-page: 5%;
        --background-color-primary: ${props => props.theme.backgroundColorPrimary};
        --color-text-primary: ${props => props.theme.colorTextPrimary};
        --color-text-secondary: ${props => props.theme.colorTextSecondary};
        --color-text-tertiary: ${props => props.theme.colorTextTertiary};
        --color-accent: #F07E74;
        --color-positive: #00b500;
        --color-negative: #fa1616;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus,
    *:focus::before,
    *:focus::after{
        outline: none;
    }

    html{
        scroll-behavior: smooth;
        font-family: "Inter", serif;
        font-size: 16px;
    }

    a{
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    img{
        display: block;
    }

    ul, li{
        list-style: none;
    }

    button{
        outline: none;
        border: none;
    }

    body{
        color: var(--color-text-primary);
    }
`;

export const lightTheme = {
    mode: "light",
    backgroundColorPrimary: "#FFFFFF",
    colorTextPrimary: "#000000",
    colorTextSecondary: "#333333",
    colorTextTertiary: "#6F6F6F",
};

export const darkTheme = {
    mode: "dark",
    backgroundColorPrimary: "#080808",
    colorTextPrimary: "#FFFFFF",
    colorTextSecondary: "#E0E0E0",
    colorTextTertiary: "#9E9E9E",
};