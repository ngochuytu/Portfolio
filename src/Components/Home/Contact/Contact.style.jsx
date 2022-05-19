import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";
import { leafletDarkFilter } from "./LeafletMap";

const ContactContainer = styled.div`
    position: relative;
    padding: 50px 0;

    @media ${devices.mobile}{
        padding: 30px 0;
    }
`;

const ContactTitle = styled.h1`
    font-size: 55px;
    width: max-content;
    margin-bottom: 40px;

    &:focus-visible{
        color: var(--color-accent);
    }
    
    @media ${devices.tablet}{
        font-size: 50px;   
    }

    @media ${devices.mobile}{
        font-size: 35px;
        margin-bottom: 25px;
    }
`;

const ContactContent = styled.div`
    display: flex;

    @media ${devices.tablet}{
        flex-direction: column;
    }
`;

const LeftContent = styled.div`
    flex-basis: 40%;

    @media ${devices.tablet}{
        order: 2;
    }
`;

const ContactForm = styled.form``;

const PlaceHolder = styled.span`
    position: absolute;
    left: 10px; /*var*/
    top: 50%;
    color: var(--color-text-secondary);
    transform: translateY(-50%);
    transition: all .25s linear;
`;

const Line = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to left, var(--color-text-secondary) 50%, var(--color-accent) 50%) right;
    background-size: 200%;
    border-radius: 3px;
    transition: background-position .5s linear, 
                height .25s linear;
`;

const FieldGroup = styled.div`
    position: relative;
    height: ${props => `${props.fieldHeight}px`};
    margin-bottom: 30px;

    ${props => props.hasValue &&
        `
            & ${PlaceHolder} {
                top: -12.5px;
                left: 0;
            }

            & ${Line}{
                background-position: left;
            }
        `
    };

    ${props => props.isValid ||
        `
            & ${PlaceHolder} {
                color: var(--color-negative);
            }

            & ${Line}{
                background: var(--color-negative);
            }
        `
    };
    
    &:focus-within ${PlaceHolder}
    {
        top: -12.5px;
        left: 0;
    }

    &:focus-within ${Line}{
        background-position: left;
    }
`;

const InputStyle = `
    position: absolute;
    z-index: 1;
    font-size: 16px;
    background: transparent;
    color: var(--color-text-secondary);
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 10px;

    &:-webkit-autofill{
        -webkit-text-fill-color: var(--color-text-secondary);
    }
`;

const Input = styled.input`
    ${InputStyle};
    text-overflow: ellipsis;


    &:-webkit-autofill {
        transition: background-color 9999s ease-in-out 0s;
    }
`;

const TextArea = styled.textarea`
    ${InputStyle};
    resize: none;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: black;
        border-radius: 5px;   
    }
`;

const RightContent = styled.div`
    flex-basis: 50%;
    margin-left: auto;
    filter: ${props => props.theme.mode === "dark" ? leafletDarkFilter : null};
    

    @media ${devices.tablet}{
        margin-left: initial;
        margin-bottom: 35px;
        order: 1;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    position: relative;
    background: transparent;
    color: var(--color-text-primary);
    overflow: hidden;
    padding: 10px 15px;
    cursor: pointer;
    transition: box-shadow 250ms linear,
                background-color 250ms linear,
                color 250ms linear;

    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid var(--color-text-primary);
        border-left: 2px solid var(--color-text-primary);
        transition: all 250ms linear;
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid var(--color-text-primary);
        border-right: 2px solid var(--color-text-primary);
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-visible{
        background-color: var(--color-accent);
        color: var(--background-color-primary);
        ${props => props.theme.mode === "dark" ? `box-shadow: 0 0 25px var(--color-accent);` : null};
        transition-delay: 250ms;
    }

    &:hover::before,
    &:hover::after,
    &:focus-visible::before,
    &:focus-visible::after{
        width: 100%;
        height: 100%;
        border-color: var(--color-accent);
    }
`;

export { ContactContainer, ContactTitle, ContactContent, LeftContent, ContactForm, PlaceHolder, Line, FieldGroup, Input, TextArea, RightContent, Buttons, Button };