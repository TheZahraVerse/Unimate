/*
    Language Context Provider 
    Manages and provides the application-wide language state (e.g., 'en', 'fa')
    using i18next and localStorage. Enables easy language switching and html direction(ltr/rtl)
    for all child components.
*/
import { createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n";

// Create the context with a default null value
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Initialize language state from localStorage or default to 'en'
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  //  Effect to :
  // update i18next language and save the current language to localStorage
  // update the direction (rtl for 'fa' , ltr for 'eng')
  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); 

    const htmlElement = document.documentElement;
    if (lang === "fa") {
      htmlElement.dir = "rtl"; 
    } else {
      htmlElement.dir = "ltr"; 
    }
  }, [lang]); 

  // Function to toggle between languages
  const toggleLanguage = () => {
    setLang(currentLang => (currentLang === "en" ? "fa" : "en"));
  };

   // Provide the language state and toggle function through the context
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// costum hook for easy access
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
