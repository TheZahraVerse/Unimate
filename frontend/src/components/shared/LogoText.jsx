/*
    Logo Text :
    a logo image with the text of website name horizontally oriented
*/

import React from 'react'
import { useTranslation } from 'react-i18next';
import LogoImage from './LogoImage'

export default function LogoText() {
  // translate logo name
  const {t, i18n} = useTranslation();

  return (
    <div className="flex items-center gap-2.5">
      <LogoImage />

      <span
        className="text-lg sm:text-xl font-semibold 
        text-black dark:text-white tracking-tight"
      >
        {t("public.name")}
      </span>
    </div>
  );
}
