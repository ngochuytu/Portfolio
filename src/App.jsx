import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import NotificationsContextProvider from "./Contexts/NotificationsContext";
import { useSettingsContext } from "./Contexts/SettingsContext";
import Home from "./Pages/Home/Home";
import { GlobalStyle, lightTheme, darkTheme } from "./Theme/Theme";

const multiLanguageContent = {
    en: {
        title: "Hi, I'm Huy"
    },
    vn: {
        title: "Xin chào, mình là Huy"
    }
};

function App() {
    const { settings: { theme, language } } = useSettingsContext();

    useEffect(() => {
        document.title = multiLanguageContent[language].title;
    }, [language]);

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <NotificationsContextProvider>
                <Home />
            </NotificationsContextProvider>
        </ThemeProvider>
    );
}

export default App;
