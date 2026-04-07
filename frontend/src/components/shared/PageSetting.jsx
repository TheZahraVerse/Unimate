/**
 * Page setting holds Icon buttons (toggle theme , toggle language)
 * Defining onClick methods in this block to use this package in any page
 * (Controlling global setting for each page)
 */
import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import IconButton from "../UI/buttons/IconButton";


export default function PageSetting() {
  // Define contexts
  const { toggleLanguage , lang} = useLanguage();
  const { toggleTheme , theme } = useTheme();

  
  // State for loading status (shared for both actions)
  const [isChanging, setIsChanging] = useState(false);

  //Define functions
  const handleLanguageToggle = () => {
    if (isChanging) return; // Prevent double click
    setIsChanging(true);
    
    // Delay for UX and animation
    setTimeout(() => {
      toggleLanguage();
      setIsChanging(false);
    }, 500); 
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };


  return (
    <div dir="ltr" className="flex items-center gap-4 border border-(--border-default) rounded-lg ">
        {/* language/dir toggle button  */}
        <IconButton
        type = "button"
        iconName={isChanging ? "spinner" : (lang === "en" ? "farsi" : "english")}
        onClick={handleLanguageToggle}
        />

        {/* theme toggle button  */}
        <IconButton
        type = "button"
        iconName={theme === "dark" ? "sun" : "moon"}
        onClick={handleThemeToggle}
        />
    </div>
  );
}
