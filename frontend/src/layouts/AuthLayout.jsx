/**
 * Base layout for all authentication pages (login, register, forgot password, etc.)
 * - Handles centered card layout, background, logo/site name, and responsive padding
 * - Renders children
 */

import React from "react";
import LogoText from '../components/shared/LogoText'
import PageSetting from '../components/shared/PageSetting'

export default function AuthLayout({ children }) {
  return (
    // background and position
    <div className="min-h-screen bg-(--primary) flex justify-center items-center p-4">
      
      {/* card */}
      <div className="w-full max-w-lg border border-(--border-default)
       rounded-2xl bg-(--surface) shadow-xl pt-0 px-0 p-8">
        
        {/* header (logo + settings)*/}
        <div className="flex justify-between items-center rounded-t-2xl bg-(--secondary) p-2">
          <LogoText/>
          <PageSetting/>
        </div>

        {/* main content (forms and switch buttons)*/}
        <div className="p-4 rounded-2xl">
          {children}
        </div>

      </div>
    </div>
  );
}
