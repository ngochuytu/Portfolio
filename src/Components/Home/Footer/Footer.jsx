import React from "react";
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import { FooterContainer, Logo, Navigation, NavigationList, NavigationListItem, Link, Socials, SocialIconWrapper, SocialLink, CopyRights } from "./Footer.style";

const multiLanguageContent = {
    en: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        copyRights: "Tu Ngoc Huy"
    },
    vn: {
        about: "Giới thiệu",
        projects: "Dự án",
        skills: "Kỹ năng",
        contact: "Liên hệ",
        copyRights: "Từ Ngọc Huy"
    }
};

function Footer() {
    const { settings: { language } } = useSettingsContext();
    const { about, projects, skills, contact, copyRights } = multiLanguageContent[language];

    return (
        <FooterContainer>
            <Logo>HUYFE</Logo>
            <Navigation>
                <NavigationList>
                    <NavigationListItem tabIndex={0}><Link href="#about">{about}</Link></NavigationListItem>
                    <NavigationListItem tabIndex={0}><Link href="#projects">{projects}</Link></NavigationListItem>
                    <NavigationListItem tabIndex={0}><Link href="#skills">{skills}</Link></NavigationListItem>
                    <NavigationListItem tabIndex={0}><Link href="#contact">{contact}</Link></NavigationListItem>
                </NavigationList>
            </Navigation>
            <Socials>
                <SocialIconWrapper iconColor="#0165E1" iconUnicode="\f39e" tabIndex={0}>
                    <SocialLink href="https://www.facebook.com/ngochuytu" target="_blank"><i className="fab fa-facebook-f"></i></SocialLink>
                </SocialIconWrapper>
                <SocialIconWrapper iconColor="#E1306C" iconUnicode="\f16d" tabIndex={0}>
                    <SocialLink href="https://www.instagram.com/ngochuy.tu" target="_blank"><i className="fab fa-instagram"></i></SocialLink>
                </SocialIconWrapper>
                <SocialIconWrapper iconColor="#FFFFFF" iconUnicode="\f09b" tabIndex={0}>
                    <SocialLink href="https://github.com/ngochuytu" target="_blank"><i className="fab fa-github"></i></SocialLink>
                </SocialIconWrapper>
                <SocialIconWrapper iconColor="#0A66C2" iconUnicode="\f08c" tabIndex={0}>
                    <SocialLink href="https://www.linkedin.com/in/tungochuy" target="_blank"><i className="fab fa-linkedin"></i></SocialLink>
                </SocialIconWrapper>
            </Socials>
            <CopyRights>&#169;2022. {copyRights}</CopyRights>
        </FooterContainer >
    );
}

export default Footer;