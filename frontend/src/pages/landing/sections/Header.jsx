/*
    Header:
    a sticky horizontal navigation bar 
    including logo + site name(Logo Text), links(buttons), toggles  
    specially designed for landing page
*/

import React from "react";
import LogoText from "../../../components/shared/LogoText";
import LinkButton from "../../../components/UI/LinkButton";
import IconButton from "../../../components/UI/IconButton";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div className="flex items-center justify-between h-16 px-6
          bg-gray-900/70 backdrop-blur-xl
          border border-gray-700/50
          rounded-full shadow-lg shadow-black/20">

          {/* Left: Logo */}
          <LogoText />

          {/* Right: Nav */}
          <nav className="flex items-center gap-4">

            {/* optional icons */}
            <IconButton alt="theme switch" />
            <IconButton alt="language switch" />

            {/* CTA Button */}
            <LinkButton
              text="Login / Signup"
              className="px-5 py-2 text-sm font-medium
              bg-gray-600 hover:bg-gray-500
              text-white rounded-full transition"
            />

          </nav>
        </div>
      </div>
    </header>
  );
}
