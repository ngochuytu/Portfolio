import React from 'react';
import { useSettingsContext } from '../../../Contexts/SettingsContext';
import {
  SkillsContainer,
  SkillsTitle,
  LeftContent,
  SkillsList,
  Skill,
  RightContent,
} from './Skills.style';
import IconCloud from './IconCloud';

const multiLanguageContent = {
  en: {
    title: 'Skills',
  },
  vn: {
    title: 'Kỹ năng',
  },
};

function Skills() {
  const {
    settings: { language },
  } = useSettingsContext();
  const { title } = multiLanguageContent[language];
  return (
    <SkillsContainer>
      <LeftContent>
        <SkillsTitle tabIndex={0}>{title}</SkillsTitle>
        <SkillsList>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>JavaScript</Skill>
          <Skill>ReactJS</Skill>
          <Skill>ReactNative</Skill>
        </SkillsList>
      </LeftContent>
      <RightContent>
        <IconCloud />
      </RightContent>
    </SkillsContainer>
  );
}

export default Skills;
