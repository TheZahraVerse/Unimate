/*
    Header:
    a sticky horizontal navigation bar 
    including logo + site name(Logo Text), links(buttons), toggles  
    specially designed for landing page
*/

import React from "react";
import { useTranslation } from "react-i18next";
import LogoText from "../../../components/shared/LogoText";
import LinkButton from "../../../components/UI/LinkButton";
import IconButton from "../../../components/UI/IconButton";
import { useLanguage } from "../../../context/LanguageContext";
import PageSetting from "../../../components/shared/PageSetting";

export default function Header() {
  // Initialize transtlators
  const {t} = useTranslation();
  const { toggleLanguage , lang } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div
          className="flex items-center justify-between h-16 px-6
         bg-(--header-bg) dark:bg-(--header-bg) backdrop-blur-xl
          border border-gray-700/50
          rounded-full shadow-lg shadow-black/20"
        >
          {/* Left: Logo */}
          <LogoText />

          {/* Right: Nav */}
          <nav className="flex items-center gap-4">
            <PageSetting/>

            {/* Login Button */}
            <LinkButton
              text={t("home.login")}
              href={"/login"}
              className="px-5 py-2 text-sm font-medium
              bg-gray-700 dark:bg-gray-300 hover:bg-gray-500
              text-white dark:text-black rounded-full transition"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
