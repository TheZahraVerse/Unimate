/**
 * Base layout for all authentication pages (login, register, forgot password, etc.)
 * - Handles centered card layout, background, logo/site name, and responsive padding
 * - Renders children
 */

import React from "react";
import LogoText from '../components/shared/LogoText'

export default function AuthLayout({ children }) {
  return (
    // background and position
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
      
      {/* card */}
      <div className="w-full max-w-md bg-gray-500 rounded-2xl shadow-xl overflow-hidden">
        
        {/* header (logo)*/}
        <div className="pt-4 pb-6 px-8 text-center border border-gray-300/50">
          <LogoText/>
        </div>

        {/* main content (forms and switch buttons)*/}
        <div className="p-6 border border-gray-300/50 ">
          {children}
        </div>

      </div>
    </div>
  );
}
