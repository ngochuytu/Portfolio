import React, { useEffect, useState } from 'react';
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import { AboutContainer, AboutTitle, Job, AboutContent, ContentLeft, Introduction, ContactList, ContactItem, ContactLink, ContentRight, ContentRightText, ContentRightList, ContentRightListItem, ContentRightLink } from "./About.style";
import { useNotificationsContext } from "../../../Contexts/NotificationsContext";
import { tz } from "moment-timezone";

const getCurrentTime = () => tz("Asia/Bangkok").format("hh:mm A");

const multiLanguageContent = {
    en: {
        name: "Huy",
        introduction: "I'm a Front-end Developer with a passion for learning new technologies and a love for programming beautiful, user-friendly websites.",
        email: "tungochuy2001@gmail.com",
        emailTitle: "Email me",
        phone: "+84 818 264 017",
        phoneTitle: "Call me",
        job: "Front-end Developer",
        address: "Ha Noi, Viet Nam",
        contact: "Get to know me",
        notificationMessages: {
            copyEmailSuccess: "Email copied to clipboard",
        }
    },
    vn: {
        name: "Huy",
        introduction: "Mình là Front-end Developer có niềm đam mê học hỏi những công nghệ mới, lập trình những trang web thân thiện với người dùng.",
        email: "tungochuy2001@gmail.com",
        emailTitle: "Gửi email",
        phone: "+84 818 264 017",
        phoneTitle: "Gọi điện",
        job: "Front-end Developer",
        address: "Hà Nội, Việt Nam",
        contact: "Liên hệ với mình",
        notificationMessages: {
            copyEmailSuccess: "Đã copy email",
        }
    }
};

function About() {
    const [_, setUpdateCurrentTime] = useState(false);
    const { settings: { language } } = useSettingsContext();
    const { newNotification } = useNotificationsContext();
    const { name, introduction, email, emailTitle, phone, phoneTitle, job, address, contact, notificationMessages } = multiLanguageContent[language];

    const handleCopyIcon = () => {
        navigator.clipboard.writeText(email);

        newNotification({
            id: "header-copy-email",
            type: "success",
            message: notificationMessages.copyEmailSuccess,
            duration: 2000,
        });
    };

    const handleCopyIconKeyDown = e => {
        if (e.code === "Enter" || e.key === "Enter") {
            handleCopyIcon();
        }
    };

    useEffect(() => {
        const updateCurrentTimeInterval = setInterval(() => setUpdateCurrentTime(currentUpdateCurrentTime => !currentUpdateCurrentTime), 1000);

        return () => {
            clearInterval(updateCurrentTimeInterval);
        };
    }, []);

    return (
        <AboutContainer>
            <AboutTitle tabIndex={0}>{name}</AboutTitle>
            <Job>{job}</Job>
            <AboutContent>
                <ContentLeft>
                    <Introduction>&#8220;{introduction}&#8221;</Introduction>
                    <ContactList>
                        <ContactItem>
                            <ContactLink href="mailto:tungochuy2001@gmail.com" tabIndex={0} title={emailTitle}>
                                <i className="fa-regular fa-envelope"></i>
                                {email}
                            </ContactLink>
                            <i className="fa-regular fa-copy" title="Copy email" tabIndex={0} onClick={handleCopyIcon} onKeyDown={handleCopyIconKeyDown}></i>
                        </ContactItem>
                        <ContactItem>
                            <ContactLink href="tel:+84-818-264-017" tabIndex={0} title={phoneTitle}>
                                <i className="fa-solid fa-phone"></i>
                                {phone}
                            </ContactLink>
                        </ContactItem>
                    </ContactList>
                </ContentLeft>
                <ContentRight>
                    <ContentRightText>{address} {getCurrentTime()}</ContentRightText>
                    <ContentRightText>{contact}</ContentRightText>
                    <ContentRightList>
                        <ContentRightListItem tabIndex={0}><ContentRightLink href="https://github.com/ngochuytu" target="_blank" tabindex="0">Github</ContentRightLink></ContentRightListItem>
                        <ContentRightListItem tabIndex={0}><ContentRightLink href="../../../Assets/Documents/Home/Header/CV_TuNgocHuy.pdf" download={true} tabindex="0">Download CV</ContentRightLink></ContentRightListItem>
                    </ContentRightList>
                </ContentRight>
            </AboutContent>
        </AboutContainer>
    );
}

export default About;