/**
 * Dashboard Layout
 * Defines the persistent frame for all dashboard pages.
 * - Provides static navigation sidebar and dynamic title
 * - Wraps page-specific content within the 'main' area using a flexible grow layout.
 */

import React, { useState } from "react";
import Navigation from "../components/dashboard/sections/navigation/Navigation";
import PageSetting from "../components/shared/PageSetting";
import IconButton from "../components/UI/buttons/IconButton";
import { useLanguage } from "../context/LanguageContext";

export default function DashboardLayout({ children, title }) {
  const [sidePanel, mainContent] = React.Children.toArray(children);
  const [navOpen, setNavOpen] = useState(false);
  const { lang } = useLanguage();
  const isRTL = lang === "fa";

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Nav (lg+) */}
      <div className="hidden lg:block w-1/6 shrink-0">
        <Navigation />
      </div>

      {/* Mobile Nav - Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50
          transform shadow-xl
          transition-transform duration-300
          w-64
          ${isRTL ? "right-0" : "left-0"}
          ${
            navOpen
              ? "translate-x-0"
              : isRTL
                ? "translate-x-full"
                : "-translate-x-full"
          }
          lg:hidden
        `}
      >
        <Navigation />
      </div>

      {/* Backdrop when nav is open on mobile */}
      {navOpen && (
        <div
          className="fixed bg-(--overlay) inset-0 z-40 lg:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Main area*/}
      <div className="grow overflow-y-auto">
        {/* Header*/}
        <header className="flex items-center p-2">
          {/* Navigation Mobile hamburger */}
          <IconButton
            iconName="hamburger"
            onClick={() => setNavOpen(true)}
            className="lg:hidden mr-2 w-1/3"
          />

          <h1 className="text-xl w-1/3 font-semibold">{title}</h1>
        </header>

        {/* MAIN CONTENT WRAPPER */}
        <main className="flex flex-row-reverse h-full w-full p-6">
          {/* SidePanel (2/6 on desktop, full on mobile if needed) */}
          <div className="w-full lg:w-2/6">{sidePanel}</div>

          {/* MainContent (4/6 on desktop) */}
          <div className="w-full lg:w-4/6">{mainContent}</div>
        </main>
      </div>
    </div>
  );
}
