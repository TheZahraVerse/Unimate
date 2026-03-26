/**
 * Hero Section:
 * main banner(first look)
 * including welcome text and CTA button to start
 * specially designed for landing page 
 */

import React from 'react'
import ActionButton from '../../../components/UI/ActionButton'
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className=" group bg-gray-200 dark:bg-gray-900 min-h-[70vh] flex items-center transition-colors duration-500 ease-in-out">
      <div className="max-w-5xl mx-auto px-6 w-full transition-colors duration-500 ease-in-out">
        <h1 className="text-black dark:text-white text-6xl font-bold mb-6 transition-colors duration-500 ease-in-out">
          {t("public.welcome")}
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-500 transition-colors duration-500 ease-in-out">
          {t("public.start")}
        </p>
        {/* TODO: add link button to log in */}
      </div>
    </section>
  );
}
