import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const NavigationBar = styled.nav`
    position: fixed;
    z-index: 3;
    background-color: rgba(0,0,0,0.95);
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

    &::after{
        content: "";
        position: absolute;
        background-color: var(--color-accent);
        left: 0;
        bottom: 0;
        height: 2px;
        width: ${props => props.scrollProgress}%;
    }
`;

const NavigationList = styled.ul`
    position: relative;
    display: flex;
    align-items: center;

    i{
        font-size: 25px;
        color: #FFF;
        transition: color 200ms ease-in-out;

        @media ${devices.mobile}{
            font-size: 20px;
        }
    }

    i:hover,
    i:focus-visible,
    & > :nth-child(${props => props.sectionOnScroll !== null ? props.sectionOnScroll + 1 : null}) i{
        color: var(--color-accent);
    }
`;

const NavigationListItem = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavigationLink = styled.a`
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 20px;

    @media ${devices.mobile}{
        padding: 15px;
    }
`;

export { NavigationBar, NavigationList, NavigationListItem, NavigationLink };