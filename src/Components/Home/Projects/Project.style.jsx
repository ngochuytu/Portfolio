import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const ProjectContainer = styled.div`
    display: grid;
    grid-template-areas: "left-content right-content"
                        "sub-content right-content";
    grid-template-columns: 45% 1fr;
    align-items: start;
    padding: 75px 0;

    &:not(:last-of-type){
        border-bottom: 1px solid var(--color-text-tertiary);
    }

    &:last-of-type{
        border-bottom: 5px solid var(--color-text-primary);
    }

    @media ${devices.laptop}{
        grid-template-areas:"left-content"
                            "right-content"
                            "sub-content";
        grid-template-columns: 1fr;
        padding: 50px 0;
    }

    @media ${devices.mobile}{
        padding: 30px 0;
    }
`;

const LeftContent = styled.div`
    grid-area: left-content;
    margin-right: ${props => `${props.marginRight / 2 + 15}px`};
    
    @media ${devices.laptop}{
        margin-right: initial;
    }
`;

const Header = styled.h1`
    font-size: 16px;
    text-transform: uppercase;
`;

const ProjectTitle = styled.h2`
    font-size: 50px;
    width: max-content;
    margin: 30px 0;

    &:focus-visible{
        color: var(--color-accent);
    }

    @media ${devices.laptop}{
        margin: 10px 0 30px 0;
    }

    @media ${devices.tablet}{
        font-size: 40px;   
    }

    @media ${devices.mobile}{
        font-size: 27.5px;
        margin: 10px 0;
    }
`;

const ProjectDescription = styled.p`
    font-size: 20px;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin-bottom: 100px;

    @media ${devices.desktop}{
        margin-bottom: 50px;
    }

    @media ${devices.mobile}{
        font-size: 18px;
        margin-bottom: 30px;  
    }
`;

const RightContent = styled.div`
    grid-area: right-content;
    position: relative;

    @media ${devices.laptop}{
        margin-bottom: 30px;
    }

    @media ${devices.mobile}{
        margin-bottom: 15px;
    }
`;

const ProjectDemoVideo = styled.video`
    width: 100%;
    height: auto;
    border: 2px solid var(--color-text-primary);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ProjectThumbImage = styled.img`
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: -30px;
    width: 25%;
    max-width: 250px;
    transform: translateX(-50%);

    @media ${devices.laptop}{
        display: none;
    }
`;

const SubContent = styled.div`
    grid-area: sub-content;
`;

const ProjectLinks = styled.div``;

const Icon = styled.img`
    width: 30px;
`;

const ProjectLink = styled.a`
    font-weight: 700;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    width: max-content;
    padding-bottom: 5px;
    transition: color 150ms ease-in-out;

    &:hover,
    &:focus-visible{
        color: var(--color-text-primary);
    }

    &:hover > ${Icon},
    &:focus-visible > ${Icon}{
        filter: ${props => props.theme.mode === "dark" ?
        'invert(100%) sepia(0%) saturate(0%) hue-rotate(165deg) brightness(102%) contrast(103%)' :
        'invert(0%) sepia(4%) saturate(3190%) hue-rotate(209deg) brightness(100%) contrast(103%)'};
    }

    @media ${devices.mobile}{
        font-size: 14px;
    }

    & > ${Icon}{
        /* Convert icon's color to the same as text's color https://codepen.io/sosuke/pen/Pjoqqp*/
        filter: invert(64%) sepia(0%) saturate(1%) hue-rotate(204deg) brightness(95%) contrast(94%);
        margin-left: 20px;
        transition: filter 150ms ease-in-out;
    }
`;

export { ProjectContainer, LeftContent, Header, ProjectTitle, ProjectDescription, RightContent, ProjectDemoVideo, ProjectThumbImage, SubContent, ProjectLinks, ProjectLink, Icon };