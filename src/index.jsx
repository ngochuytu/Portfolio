import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import SettingsContext from "./Contexts/SettingsContext";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <SettingsContext>
        <App />
    </SettingsContext>
);
