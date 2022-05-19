import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import { devices } from "../../../Breakpoints/Breakpoints";
import { useNotificationsContext } from "../../../Contexts/NotificationsContext";

const NotificationContainer = styled.div`
    --color-notification: ${props => props.type === "success" ? "var(--color-positive)" : "var(--color-negative)"};

    position: relative;
    background-color: #212532;
    color: #FFF;
    width: 200px;
    padding: 10px 15px;

    &::after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: ${props => props.countdown}%;
        height: 2px;
        background: var(--color-notification);
    }

    @media ${devices.mobile}{
        width: 175px;
        padding: 10px;
    }
`;

const NotificationContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    @media ${devices.mobile}{
        font-size: 14px;
    }
`;

const IconContainer = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: var(--color-notification);
    border-radius: 50%;
`;

const Messages = styled.p``;


function Notification({ id, type, message, duration }) {
    const [notificationCountdown, setNotificationCountdown] = useState(100);
    const { removeNotification } = useNotificationsContext();

    useEffect(() => {
        //Countdown
        const step = duration / 100;

        const interval = setInterval(() => {
            setNotificationCountdown(prevState => {
                if (prevState > 0) {
                    return prevState - 1;
                }
            });
        }, step);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        //Remove notification after countdown
        if (notificationCountdown <= 0) {
            removeNotification(id);
        }
    }, [notificationCountdown]);

    return (
        <Slide left duration={500}>
            <NotificationContainer countdown={notificationCountdown} type={type}>
                <NotificationContent>
                    <IconContainer>
                        {
                            type === "success" ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>
                        }
                    </IconContainer>
                    <Messages>{message}</Messages>
                </NotificationContent>
            </NotificationContainer>
        </Slide>
    );
}

export default Notification;