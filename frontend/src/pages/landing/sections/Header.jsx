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
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div
          className="flex items-center justify-between h-16 px-6
          bg-(--primary) backdrop-blur-xl
          border border-border-default
          rounded-full shadow-lg shadow-black/20"
        >
          {/* Left: Logo */}
          <LogoText />

          {/* Right: Nav */}
          <nav className="flex items-center gap-4">
            <PageSetting />

            {/* Login Button */}
            <LinkButton
              text={t("auth.login")}
              href={"/login"}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
