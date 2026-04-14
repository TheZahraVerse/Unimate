/**
 * Professors page using the shared dashboard layout
 * SidePanel displays the list of professors
 * MainContent includes survey section and a panel for viewing survey results and statistics
 */
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import MainContent from "../../components/dashboard/sections/content/MainContent";
import SidePanel from "../../components/dashboard/sections/sidepanel/SidePanel";

export default function Professors() {
  return (
    <DashboardLayout title="Professors">
      <SidePanel />
      <MainContent />
    </DashboardLayout>
  );
}
