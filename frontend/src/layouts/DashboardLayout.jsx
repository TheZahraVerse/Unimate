/**
 * Shared dashboard layout for pages in dashboard
 * Including Navigation, Main content and Side panel 
 * Used for all authenticated pages in menu
 */

import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
        {/* Navigation : Menubar , logo , user profile  */}
        <div>Navigation</div>

        {/* Main Content : title , main wrapper(pages) */}
        <div>Main Content 
            {children}
        </div>

        {/* Side Panel : List , Toolbox */}
        <div>Side Panel</div>

    </div>
  )
}
