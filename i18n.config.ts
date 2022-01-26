import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {};

i18n.use(initReactI18next).init({
        cleanCode: true,
        debug: false,
        fallbackLng: "en",
        interpolation: {
                escapeValue: false,
        },
        nonExplicitSupportedLngs: true,
        resources,
        supportedLngs: ["en", "it-IT"],
});

export default i18n;
