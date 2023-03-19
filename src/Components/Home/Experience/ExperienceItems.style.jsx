import styled from "styled-components";
import { devices } from "../../../Breakpoints/Breakpoints";

const ExperienceItemsContainer = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
  min-height: 1250px;
`;

const Info = styled.ul`
  width: 260px;
  ${(props) => props.textLeft && `margin-right: 25px`};
  ${(props) => props.textRight && `margin-left: 15px`};

  @media ${devices.mobile} {
    margin: 0;
    width: initial;
  }
`;

const InfoItem = styled.li`
  font-size: 16px;
  color: var(--color-text-secondary);
  ${(props) => `margin-bottom: ${props.marginBottom}px`};

  ${(props) =>
    props.hasBullet &&
    `
    &::before {
      content: "•";
      color: var(--color-accent);
      width: 15px;
      display: inline-block;
    }
    `}
`;

const InfoItemCompany = styled.p`
  font-size: 20px;
  margin-bottom: 2.5px;
  color: var(--color-text-primary);

  @media ${devices.laptop} {
    font-size: 18px;
  }
`;

const InfoItemPosition = styled.p`
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 3.5px;

  @media ${devices.laptop} {
    font-size: 15px;
  }
`;

const InfoItemTime = styled.p`
  font-size: 14px;
  color: var(--color-text-tertiary);

  @media ${devices.laptop} {
    font-size: 13px;
  }
`;

const ExperienceItemContainer = styled.div`
  display: flex;
  position: absolute;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%) !important;
    width: 100%;
  }
`;

const ExperienceItemContainerOne = styled(ExperienceItemContainer)`
  top: 85px;
  left: 50%;
  transform: translateX(-130%);

  @media ${devices.laptop} {
    left: 350px;
    transform: initial;
  }

  @media ${devices.tablet} {
    left: 50%;
    transform: translateX(-10%);
  }
`;

const ExperienceItemContainerTwo = styled(ExperienceItemContainer)`
  top: 600px;
  left: 50%;
  transform: translateX(75%);

  @media ${devices.laptop} {
    left: initial;
    right: 205px;
    transform: initial;
  }

  @media ${devices.tablet} {
    right: initial;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ExperienceItemContainerThree = styled(ExperienceItemContainer)`
  top: 1000px;
  left: 50%;
  transform: translateX(-130%);

  @media ${devices.laptop} {
    left: 340px;
    transform: initial;
  }

  @media ${devices.tablet} {
    top: 1060px;
    right: initial;
    left: 50%;
    transform: translateX(10%);
  }

  @media ${devices.mobile} {
    top: 1000px;
  }
`;

const CircleContainer = styled.div`
  position: relative;
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #180e37cc, #1e0c36c9);
  border: 1px solid #34247c;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const CirclePosition = styled.div`
  position: absolute;

  @media ${devices.mobile} {
    position: initial;
    top: initial !important;
    right: initial !important;
    bottom: initial !important;
    left: initial !important;
    order: -1;
    margin-bottom: 25px;
  }
`;

const CirclePositionOne = styled(CirclePosition)`
  top: -4px;
  right: -50px;

  @media ${devices.laptop} {
    right: 295px;
  }
`;

const CirclePositionTwo = styled(CirclePosition)`
  top: -4px;
  right: 295px;

  @media ${devices.laptop} {
    right: -50px;
  }
`;

const CirclePositionThree = styled(CirclePosition)`
  top: -4px;
  right: -65px;

  @media ${devices.laptop} {
    right: 280px;
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleOne = styled(Circle)`
  width: 108px;
  height: 108px;
`;

const CircleTwo = styled(Circle)`
  width: 84px;
  height: 84px;
`;

const CircleThree = styled(Circle)`
  top: 66px;
  left: 67px;
  width: 77px;
  height: 77px;
`;

const CircleFour = styled(Circle)`
  top: 66px;
  left: 67px;
  width: 62px;
  height: 62px;
`;

const CircleFive = styled(Circle)`
  top: 65px;
  left: 70px;
  width: 50px;
  height: 50px;
`;

const CircleContainerOne = styled(CircleContainer)`
  ${CircleOne} {
    background-image: linear-gradient(90deg, #4a1ea1c7, #4329b7c5);
    border: 1px solid #8551ff;
  }

  ${CircleTwo} {
    background-image: linear-gradient(-45deg, #6333ffc7, #782ef8be);
    border: 1px solid #9142e7;
  }

  ${CircleThree} {
    background-image: linear-gradient(45deg, #e96eedb7, #f07bff);
    border: 1px solid #ffb6ff;
  }

  ${CircleFour} {
    background-image: linear-gradient(45deg, #ffceffb9, #ffd7ffb9);
    border: 1px solid #fff;
  }

  ${CircleFive} {
    background-color: #fff;
    box-shadow: 0 0 30px 10px #fff;
  }

  &::before {
    ${props => props.theme === "dark"? "box-shadow: 40px 40px 200px 50px #8d1bff, 1px 1px 200px 50px #8d1bff" : null};
  }
`;

const CircleContainerTwo = styled(CircleContainer)`
  border-color: #6c49b0;
  background-image: linear-gradient(45deg, #1e1429a4, #432266a6);

  ${CircleOne} {
    background-image: linear-gradient(45deg, #672997a2, #942de2af);
    border: 1px solid rgba(255, 127, 255, 0.692);
  }

  ${CircleTwo} {
    background-image: linear-gradient(45deg, #6f30a3b4, #ab48b4a8);
    border: 1px solid #cb6fff;
  }

  ${CircleThree} {
    background-image: linear-gradient(45deg, #ffc1ffa1, #ff88ffab);
    border: 1px solid #ffdfff;
  }

  ${CircleFour} {
    background-image: linear-gradient(45deg, #ffc9ffaf, #ffb3ffb4);
    border: 1px solid #fff;
  }

  ${CircleFive} {
    background-image: linear-gradient(45deg, #fff, #fff);
    box-shadow: 0 0 30px 10px #fff;
  }

  &::before {
    ${props => props.theme === "dark"? "box-shadow: 1px 1px 150px 35px #ff44ec, 1px 1px 150px 35px #ff44ec" : null};
  }
`;

const CircleContainerThree = styled(CircleContainer)`
  border-color: #33ab85d8;
  background-image: linear-gradient(45deg, #0d3a2bc5, #10583fce);

  ${CircleOne} {
    background-image: linear-gradient(45deg, #289f68bd, #2fe19dbb);
    border: 1px solid #3de697c4;
  }

  ${CircleTwo} {
    background-image: linear-gradient(45deg, #45ffd4be, #4bfffcbe);
    border: 1px solid #4bffe5;
  }

  ${CircleThree} {
    background-image: linear-gradient(45deg, #9bffffb7, #afffffc4);
    border: 1px solid #eaffff;
  }

  ${CircleFour} {
    background-image: linear-gradient(45deg, #fff, #fff);
    border: 1px solid #fff;
  }

  ${CircleFive} {
    background-image: linear-gradient(45deg, #fff, #fff);
    box-shadow: 0 0 30px 10px #fff;
  }

  &::before {
    ${props => props.theme === "dark"? "box-shadow: 40px 40px 200px 50px #24ffb2b9, 1px 1px 200px 50px #24ffb2b9" : null};
  }
`;

export {
  ExperienceItemsContainer,
  Info,
  InfoItem,
  InfoItemCompany,
  InfoItemPosition,
  InfoItemTime,
  ExperienceItemContainer,
  ExperienceItemContainerOne,
  ExperienceItemContainerTwo,
  ExperienceItemContainerThree,
  CirclePositionOne,
  CirclePositionTwo,
  CirclePositionThree,
  CircleContainerOne,
  CircleContainerTwo,
  CircleContainerThree,
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
  CircleFive,
};
