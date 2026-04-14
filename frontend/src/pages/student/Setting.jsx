/**
 * Settings page using the shared dashboard layout
 * Contains all profile settings including editing personal and account information
 * MainContent handles all user configuration forms and preferences
 */
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import MainContent from "../../components/dashboard/sections/content/MainContent";
import SidePanel from "../../components/dashboard/sections/sidepanel/SidePanel";

export default function Setting() {
  return (
    <DashboardLayout title="Setting">
      <SidePanel />
      <MainContent />
    </DashboardLayout>
  );
}
