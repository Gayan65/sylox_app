import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";

import global_fi from "./locales/fi/global.json";
import global_en from "./locales/en/global.json";
import { I18nextProvider } from "react-i18next";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "fi",
    resources: {
        fi: { global: global_fi },
        en: { global: global_en },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
