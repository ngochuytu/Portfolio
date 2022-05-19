import React, { useState, createContext, useContext } from "react";

const NotificationsContext = createContext();

export const useNotificationsContext = () => useContext(NotificationsContext);

function NotificationsContextProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const newNotification = ({ id, type, message, duration }) => {
        if (notifications.findIndex(notification => notification.id === id) === -1) {
            setNotifications(currentNotifications => [...currentNotifications, {
                id: id,
                type: type,
                message: message,
                duration: duration,
            }]);
        }
    };

    const newOrUpdateNotification = ({ id, type, message, duration }) => {
        if (notifications.findIndex(notification => notification.id === id) === -1) {
            setNotifications(currentNotifications => [...currentNotifications, {
                id: id,
                type: type,
                message: message,
                duration: duration,
            }]);
        }
        else {
            setNotifications([...notifications.filter(notification => notification.id !== id), {
                ...notifications.find(notification => notification.id === id),
                message: message
            }]);
        }
    };

    const removeNotification = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    return (
        <NotificationsContext.Provider value={{ notifications, newNotification, newOrUpdateNotification, removeNotification }}>
            {children}
        </NotificationsContext.Provider>
    );

}

export default NotificationsContextProvider;