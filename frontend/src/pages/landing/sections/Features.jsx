/**
 * Features:
 * middle section that highlights and introduces product benefits
 * including four cards for each benefit
 * specially designed for landing page
 */

import React from "react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const {t} = useTranslation();

  return (
    <section className="bg-(--secondary) py-16 border-t border-(--border-default)">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl text-(--text-secondary) font-semibold text-center mb-12">
          {t("home.features")}
        </h2>
        {/* // TODO: use feature cards here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          <div className="h-40 bg-(--surface) rounded-md" />
          <div className="h-40 bg-(--surface) rounded-md" />
          <div className="h-40 bg-(--surface) rounded-md" />
          <div className="h-40 bg-(--surface) rounded-md" />
        </div>
      </div>
    </section>
  );
}
