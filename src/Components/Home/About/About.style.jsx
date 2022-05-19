import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const AboutContainer = styled.div`
    position: relative;
    background-color: var(--background-color-primary);
    border-bottom: 5px solid var(--color-text-primary);
    padding: 30px 0 50px 0;
`;

const AboutTitle = styled.h1`
    font-size: 165px;
    width: max-content;
    margin-bottom: 15px;
    margin-left: -5px;

    &:focus-visible{
        color: var(--color-accent);
    }

    @media ${devices.tablet}{
        font-size: 100px;
    }

    @media ${devices.mobile}{
        font-size: 75px;
    }
`;

const Job = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5px;

    @media ${devices.tablet}{
        font-size: 25px;
    }

    @media ${devices.mobile}{
        font-size: 22.5px;
    }
`;

const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media ${devices.tablet}{
        flex-direction: column;
    }
`;

const ContentLeft = styled.div`
    flex-basis: 50%;
    max-width: 700px;

    @media ${devices.tablet}{
        flex-basis: initial;
        max-width: initial;
        margin-bottom: 30px;
    }
`;

const Introduction = styled.p`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 15px;

    @media ${devices.tablet}{
        margin-bottom: 7.5px;
    }
`;

const ContactList = styled.ul``;

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    width: max-content;
    
    &:not(:last-of-type) {
        margin-bottom: 5px;
    }

    & > i{
        cursor: pointer;
        margin-left: 7.5px;

        &:hover,
        &:focus-visible{
            color: var(--color-accent);
        }
    }
`;

const ContactLink = styled.a`
    text-decoration: underline;
    
    i{
        margin-right: 5px;
    }

    &:hover,
    &:focus-visible{
        color: var(--color-accent);
    }
`;

const ContentRight = styled.div`
    margin-right: 55px;

    @media ${devices.laptop}{
        margin-right: 0;
    }
`;

const ContentRightText = styled.p`
    line-height: 1.5;

    &:last-of-type{
        margin-bottom: 15px;

        @media ${devices.tablet}{
            margin-bottom: 7.5px;
        }
    }
`;

const ContentRightList = styled.ul`
    display: flex;
    gap: 10px;
`;

const ContentRightListItem = styled.li`
    color: var(--color-text-tertiary);
    transition: color 200ms linear;

    &::after{
        content: "";
        display: block;
        background-color: var(--color-text-primary);
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 200ms linear;
    }

    &:hover,
    &:focus-visible{
        color: var(--color-text-primary);
    }

    &:hover::after,
    &:focus-visible::after{
        transform: scaleX(1);
    }
`;

const ContentRightLink = styled.a``;

export { AboutContainer, AboutTitle, Job, AboutContent, ContentLeft, Introduction, ContactList, ContactItem, ContactLink, ContentRight, ContentRightText, ContentRightList, ContentRightListItem, ContentRightLink };

