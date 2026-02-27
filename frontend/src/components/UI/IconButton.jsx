/*
    Icon Button
    button that contains an icon controlled by on click
    used for dark mode, language and seen/unseen password etc
*/

import React from 'react'

export default function IconButton({ src, alt = "icon", onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 w-10 flex items-center justify-center rounded-lg
         hover:bg-gray-800/50 active:bg-gray-700/70 transition-colors ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="h-6 w-6" 
      />
    </button>
  )
}
