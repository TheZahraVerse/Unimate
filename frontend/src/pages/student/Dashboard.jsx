/**
 * Dashboard page using the shared dashboard layout
 * SidePanel shows the Todo List for quick task management
 * MainContent includes reminders, timeline calendar, and profile completion status
 */
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import MainContent from "../../components/dashboard/sections/content/MainContent";
import SidePanel from "../../components/dashboard/sections/sidepanel/SidePanel";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <SidePanel/>
      <MainContent/>
    </DashboardLayout>
  );
}
