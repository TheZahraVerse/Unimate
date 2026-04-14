/**
 * Courses page using the shared dashboard layout
 * SidePanel lists available courses for quick access
 * MainContent shows the weekly schedule and exam schedule table
 * Includes a toolbox for generating weekly plans and viewing exam details
 */
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import MainContent from "../../components/dashboard/sections/content/MainContent";
import SidePanel from "../../components/dashboard/sections/sidepanel/SidePanel";

export default function Courses() {
  return (
    <DashboardLayout title="Courses">
      <SidePanel />
      <MainContent />
    </DashboardLayout>
  );
}
