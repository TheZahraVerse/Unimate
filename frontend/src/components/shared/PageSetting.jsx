/**
 * Page setting holds Icon buttons (toggle theme , toggle language)
 * Defining onClick methods in this block to use this package in any page
 * (Controlling global setting for each page)
 */
import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import IconButton from "../UI/IconButton";


export default function PageSetting() {
  // Define contexts
  const { toggleLanguage } = useLanguage();
  const { toggleTheme } = useTheme();

  //Define functions
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };


  return (
    <div className="flex items-center gap-4">
        {/* language/dir toggle button  */}
        <IconButton
        type = "button"
        iconName="globe"
        onClick={handleLanguageToggle}
        />

        {/* theme toggle button  */}
        <IconButton
        type = "button"
        iconName="moon"
        onClick={handleThemeToggle}
        />
    </div>
  );
}
