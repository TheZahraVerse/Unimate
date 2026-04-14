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
    <div className="flex items-center p-4 gap-2.5 cursor-default">
      <LogoImage />

      <span
        className="text-lg sm:text-xl font-semibold tracking-tight
        text-(--text-primary)"
      >
        {t("public.name")}
      </span>
    </div>
  );
}
