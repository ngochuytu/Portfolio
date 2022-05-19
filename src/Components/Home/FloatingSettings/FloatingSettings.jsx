import React, { useState } from 'react';
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import { SettingsContainer, SettingsItem } from "./FloatingSettings.style";
import Flags from 'country-flag-icons/react/3x2';

function FloatingSettings() {
    const [active, setActive] = useState(false);
    const { settings, dispatchSettings } = useSettingsContext();

    const handleSettingsContainerClick = () => setActive(!active);

    const handleSettingItemClick = (e, type, payload) => {
        if (active) {
            e.stopPropagation();
            dispatchSettings({ type: type, payload: payload });
        }
    };

    return (
        <SettingsContainer active={active} onClick={handleSettingsContainerClick}>
            <SettingsItem delay={0} posX={0} posY={-0.5} onClick={e => handleSettingItemClick(e, "theme", settings.theme === "dark" ? "light" : "dark")}>
                {settings.theme === "dark" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </SettingsItem>
            <SettingsItem delay={2} posX={0} posY={0.5} onClick={e => handleSettingItemClick(e, "language", settings.language === "vn" ? "en" : "vn")}>
                {settings.language === "vn" ? <Flags.VN title="Vietnam" /> : <Flags.US title="United States" />}
            </SettingsItem>
        </SettingsContainer>
    );
}

export default FloatingSettings;