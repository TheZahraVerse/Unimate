/*
    Logo Text :
    a logo image with the text of website name horizontally oriented
*/

import React from 'react'
import LogoImage from './LogoImage'

export default function LogoText({ name = "Unimate" }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoImage />

      <span
        className="text-lg sm:text-xl font-semibold 
        text-white tracking-tight"
      >
        {name}
      </span>
    </div>
  );
}
