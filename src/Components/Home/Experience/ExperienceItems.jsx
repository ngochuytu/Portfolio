import React from "react";
import { Fade } from "react-awesome-reveal";
import { screenSizes } from "../../../Breakpoints/Breakpoints";
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import useBreakpoint from "../../../Hooks/useBreakpoint";
import {
  CircleContainerOne,
  CircleContainerThree,
  CircleContainerTwo,
  CircleFive,
  CircleFour,
  CircleOne,
  CirclePositionOne,
  CirclePositionThree,
  CirclePositionTwo,
  CircleThree,
  CircleTwo,
  ExperienceItemContainerOne,
  ExperienceItemContainerThree,
  ExperienceItemContainerTwo,
  ExperienceItemsContainer,
  Info,
  InfoItem,
  InfoItemCompany,
  InfoItemPosition,
  InfoItemTime,
} from "./ExperienceItems.style";

const multiLanguageContent = {
  en: {
    infoItemOne: {
      position: "Developer",
      time: "08.2022 - Present",
    },
    infoItemTwo: {
      position: "Intern",
      time: "06.2022 - 08.2022",
    },
    infoItemThree: {
      position: "IT HelpDesk",
      time: "05.2021 - 05.2022",
    },
  },
  vn: {
    infoItemOne: {
      position: "Lập trình viên",
      time: "08.2022 - Hiện tại",
    },
    infoItemTwo: {
      position: "Thực tập sinh",
      time: "06.2022 - 08.2022",
    },
    infoItemThree: {
      position: "Hỗ trợ IT",
      time: "05.2021 - 05.2022",
    },
  },
};

function ExperienceItems() {
  const breakPoint = useBreakpoint();
  const {
    settings: { theme, language },
  } = useSettingsContext();
  return (
    <ExperienceItemsContainer>
      <ExperienceItemContainerOne>
        <Info
          textLeft={breakPoint >= screenSizes.laptop}
          textRight={breakPoint < screenSizes.laptop}
        >
          <Fade direction="down">
            <InfoItem marginBottom={10}>
              <InfoItemCompany>Powergate Software</InfoItemCompany>
              <InfoItemCompany>Powergate Australia</InfoItemCompany>
              <InfoItemPosition>
                {multiLanguageContent[language].infoItemOne.position}
              </InfoItemPosition>
              <InfoItemTime>
                {multiLanguageContent[language].infoItemOne.time}
              </InfoItemTime>
            </InfoItem>
          </Fade>
          <Fade direction="down" delay={600}>
            <InfoItem hasBullet marginBottom={5}>
              ReactJS
            </InfoItem>
          </Fade>
          <Fade direction="down" delay={800}>
            <InfoItem hasBullet>ReactNative</InfoItem>
          </Fade>
        </Info>
        <CirclePositionOne>
          <CircleContainerOne theme={theme}>
            <CircleOne />
            <CircleTwo />
            <CircleThree />
            <CircleFour />
            <CircleFive />
          </CircleContainerOne>
        </CirclePositionOne>
      </ExperienceItemContainerOne>
      <ExperienceItemContainerTwo>
        <Info
          textLeft={breakPoint <= screenSizes.laptop}
          textRight={breakPoint > screenSizes.laptop}
        >
          <Fade direction="down">
            <InfoItem marginBottom={10}>
              <InfoItemCompany>Powergate Software</InfoItemCompany>
              <InfoItemPosition>
                {multiLanguageContent[language].infoItemTwo.position}
              </InfoItemPosition>
              <InfoItemTime>
                {multiLanguageContent[language].infoItemTwo.time}
              </InfoItemTime>
            </InfoItem>
            <Fade direction="down" delay={600}>
              <InfoItem hasBullet marginBottom={5}>
                ReactJS
              </InfoItem>
            </Fade>
          </Fade>
        </Info>
        <CirclePositionTwo>
          <CircleContainerTwo theme={theme}>
            <CircleOne />
            <CircleTwo />
            <CircleThree />
            <CircleFour />
            <CircleFive />
          </CircleContainerTwo>
        </CirclePositionTwo>
      </ExperienceItemContainerTwo>

      <ExperienceItemContainerThree>
        <Info
          textLeft={breakPoint >= screenSizes.laptop}
          textRight={breakPoint < screenSizes.laptop}
        >
          <Fade direction="down">
            <InfoItem marginBottom={10}>
              <InfoItemCompany>ITPlus Academy</InfoItemCompany>
              <InfoItemPosition>
                {multiLanguageContent[language].infoItemThree.position}
              </InfoItemPosition>
              <InfoItemTime>
                {multiLanguageContent[language].infoItemThree.time}
              </InfoItemTime>
            </InfoItem>
          </Fade>
        </Info>
        <CirclePositionThree>
          <CircleContainerThree theme={theme}>
            <CircleOne />
            <CircleTwo />
            <CircleThree />
            <CircleFour />
            <CircleFive />
          </CircleContainerThree>
        </CirclePositionThree>
      </ExperienceItemContainerThree>
    </ExperienceItemsContainer>
  );
}

export default ExperienceItems;
