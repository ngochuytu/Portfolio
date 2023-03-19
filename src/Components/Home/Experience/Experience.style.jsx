import styled, { keyframes } from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const ExperienceContainer = styled.div`
  position: relative;
  border-bottom: 5px solid var(--color-text-primary);
  padding: 50px 0;

  @media ${devices.mobile} {
    padding: 30px 0;
  }
`;

const ExperienceTitle = styled.h1`
  font-size: 55px;
  width: max-content;
  margin-bottom: 40px;

  &:focus-visible {
    color: var(--color-accent);
  }

  @media ${devices.tablet} {
    font-size: 50px;
  }

  @media ${devices.mobile} {
    font-size: 35px;
    margin-bottom: 25px;
  }
`;

const ExperienceContent = styled.div``;

const RoadMapPathRunning = keyframes`
    from{
        stroke-dashoffset: -1px;
    }

    to{
        stroke-dashoffset: -750000px;
    }
`;

const RoadMapSvg = styled.svg`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);

  path:nth-of-type(1) {
    animation: ${RoadMapPathRunning} 5000s infinite;
  }
  path:nth-of-type(2) {
    animation: ${RoadMapPathRunning} 6000s infinite;
  }
  path:nth-of-type(3) {
    animation: ${RoadMapPathRunning} 7000s infinite;
  }
  path:nth-of-type(4) {
    animation: ${RoadMapPathRunning} 8000s infinite;
  }
  path:nth-of-type(5) {
    animation: ${RoadMapPathRunning} 9000s infinite;
  }
  path:nth-of-type(6) {
    animation: ${RoadMapPathRunning} 10000s infinite;
  }

  @media ${devices.laptop} {
    transform: initial;
    left: 80px;
  }

  @media ${devices.tablet} {
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 2000px;
  }

  @media ${devices.mobile} {
    height: 1800px;
  }
`;

export { ExperienceContainer, ExperienceTitle, ExperienceContent, RoadMapSvg };
