import styled, { keyframes } from 'styled-components';
import { devices } from "../../../Breakpoints/Breakpoints";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: var(--padding-horizontal-page);
`;

const HeroText = styled.div`
    z-index: 1;
    color: white;
    text-align: center;
    pointer-events: none;
`;

const HeroIntro = styled.h1`
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;

    & > *{
        display: inline-block;
    }

    @media ${devices.tablet}{
        font-size: 30px;
    }
`;

const HeroJob = styled.h2`
    font-weight: 200;
    
    & > *{
        display: inline-block;
    }

    @media ${devices.tablet}{
        font-size: 20px;   
    }
`;

const BlinkingCursorAnimation = keyframes`
    from{
        opacity: 1;
    }

    to{
        opacity: 0;
    }
`;

const BlinkingCursor = styled.div`
    animation: ${BlinkingCursorAnimation} 1s infinite;
`;

export { HeroContainer, HeroText, HeroIntro, HeroJob, BlinkingCursor };