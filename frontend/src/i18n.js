/*
    i18n Configuration File 
    Initializes i18next and connects translation resources (locales)
    to the React application, enabling multi-language support.
*/
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en"
import fa from "./locales/fa"

i18n.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        fa:{translation:fa},
    },
    // default language
    lng:"en",
    fallbackng:"en",
    interpolation:{escapeValue:false},
});

export default i18n;