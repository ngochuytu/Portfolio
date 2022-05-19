import React, { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();

export const useSettingsContext = () => useContext(SettingsContext);

const initialSettings = {
    theme: "dark",
    language: "en"
};

const settingsReducer = (state, action) => {
    switch (action.type) {
        case "theme":
            return { ...state, theme: action.payload };
        case "language":
            return { ...state, language: action.payload };
        default:
            return state;
    }
};

function SettingsContextProvider({ children }) {
    const [settings, dispatchSettings] = useReducer(settingsReducer, initialSettings);

    return (
        <SettingsContext.Provider value={{ settings, dispatchSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContextProvider;