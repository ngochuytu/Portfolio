import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const SkillsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid var(--color-text-tertiary);
    padding: 50px 0;

    @media ${devices.tablet}{
        flex-direction: column;
        align-items: initial;
    }

    @media ${devices.mobile}{
        padding: 30px 0;
    }
`;

const SkillsTitle = styled.h1`
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

const LeftContent = styled.div`
    flex-basis: 40%;

    @media ${devices.tablet}{
        margin-bottom: 35px;
    }
`;

const SkillsList = styled.ul`
    @media ${devices.tablet}{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const Skill = styled.li`
    font-size: 20px;
    color: var(--color-text-secondary);
    
    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media ${devices.mobile}{
        font-size: 16px;  
        flex-basis: calc(100% / 2);

        &:nth-of-type(2n){
            padding-left: 40px;
        }
    }
`;

const RightContent = styled.div`
    flex-basis: 60%;
    display: flex;
    justify-content: center;

    & canvas{
        width: 100%;
        max-height: 500px
    }
`;

export { SkillsContainer, SkillsTitle, LeftContent, SkillsList, Skill, RightContent };