/*
    i18n Configuration File
    initialing i18next and connecting 
    translation resources to react.

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
    fallbacking:"en",
    interpolation:{escapeValue:false},
});

export default i18n;