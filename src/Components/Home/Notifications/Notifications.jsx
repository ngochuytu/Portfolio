import React from 'react';
import { useNotificationsContext } from "../../../Contexts/NotificationsContext";
import { NotificationsContainer } from "./Notifications.style";
import Notification from "./Notification";

function Notifications() {
    const { notifications } = useNotificationsContext();

    return (
        <NotificationsContainer>
            {
                notifications?.map(notification =>
                    <Notification
                        key={notification.id}
                        id={notification.id}
                        type={notification.type}
                        message={notification.message}
                        duration={notification.duration}
                    />
                )
            }
        </NotificationsContainer>
    );
}

export default Notifications;