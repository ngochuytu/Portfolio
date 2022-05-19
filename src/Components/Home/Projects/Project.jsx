import React, { useState, useEffect, useRef } from 'react';
import { ProjectContainer, LeftContent, Header, ProjectTitle, ProjectDescription, RightContent, ProjectDemoVideo, ProjectThumbImage, SubContent, ProjectLinks, ProjectLink, Icon } from "./Project.style";
import RightArrowIcon from "../../../Assets/Images/Home/Projects/FacebookClone/RightArrowIcon.png";

function Project({ projectHeader, projectTitle, projectDescription, projectDemoLinkTitle, projectDemoLink, projectGithubLinkTitle, projectGithubLink, projectDemoVideo, projectThumbImage }) {
    const [leftContentMarginRight, setLeftContentMarginRight] = useState();
    const projectImageRef = useRef(null);

    useEffect(() => {
        const changeLeftContentMarginRight = () => {
            if (projectImageRef) {
                setLeftContentMarginRight(projectImageRef.current.clientWidth);
            }
        };

        changeLeftContentMarginRight();

        window.addEventListener("resize", changeLeftContentMarginRight);

        return () => {
            window.removeEventListener("resize", changeLeftContentMarginRight);
        };

    }, [projectImageRef]);

    return (
        <ProjectContainer>
            <LeftContent marginRight={leftContentMarginRight}>
                <Header>{projectHeader}</Header>
                <ProjectTitle tabIndex={0}>{projectTitle}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
            </LeftContent>
            <RightContent>
                <ProjectDemoVideo muted autoPlay preload="auto" loop>
                    <source src={projectDemoVideo} type="video/mp4"></source>
                </ProjectDemoVideo>
                <ProjectThumbImage src={projectThumbImage} ref={projectImageRef} alt={`${projectTitle} Thumbnail Image`} />
            </RightContent>
            <SubContent>
                <ProjectLinks>
                    <ProjectLink href={projectDemoLink} target="_blank" tabIndex={0}>{projectDemoLinkTitle} <Icon src={RightArrowIcon} alt="Right Arrow Icon" /></ProjectLink>
                    <ProjectLink href={projectGithubLink} target="_blank" tabIndex={0}>{projectGithubLinkTitle} <Icon src={RightArrowIcon} alt="Right Arrow Icon" /></ProjectLink>
                </ProjectLinks>
            </SubContent>
        </ProjectContainer>
    );
}

export default Project;