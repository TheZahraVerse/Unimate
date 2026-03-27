/**
 * Hero Section:
 * main banner(first look)
 * including welcome text and CTA button to start
 * specially designed for landing page
 */

import React from "react";
import ActionButton from "../../../components/UI/ActionButton";
import LinkButton from "../../../components/UI/LinkButton";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[70vh] flex items-center bg-(--secondary)">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h1 className=" text-6xl font-bold mb-6 text-(--text-secondary)">
          {t("public.welcome")}
        </h1>
        {/* TODO: add paragraph to guide  */}

        {/* Guide button to start login */}
        <LinkButton text={t("public.start")} href={"/login/"} className="text-2xl"/>
      </div>
    </section>
  );
}
