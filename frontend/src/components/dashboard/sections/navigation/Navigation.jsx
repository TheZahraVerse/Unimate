/**
 * Dashboard Navigation bar
 * Includes menu bar , logo and user profile
 * Shown on the side across all dashboard pages(used in layout)
 * Provides access to main sections of the dashboard(pages)
 */
import React from "react";
import LogoText from "../../../shared/LogoText";
import PageSetting from "../../../shared/PageSetting";
import MenuBar from "./MenuBar";
import IconButton from "../../../UI/buttons/IconButton";
import { useState } from "react";

export default function Navigation() {
  return (
    <div className="space-y-4 py-4 bg-(--secondary) h-full">
      <LogoText />
      <PageSetting />
      <MenuBar />
    </div>
  );
}
