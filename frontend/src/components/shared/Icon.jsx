/**
 * Icon : to hold SVG icons with proper look and size 
 * gets the name of icon (or style) and returns the proper icon look
 */
import React from 'react'
// TODO: import SVG icons from assets


export default function Icon({ name , className= "w-5 h-5 text-gray-500"}) {
    const icons = {
        // replace these texts with imports 
        email : <span className={className}>✉</span>, 
        lock : <span className={className}>🔒</span>,
        eyeOpen : <span className={className}>👁️</span>,
        eyeClosed : <span className={className}>🙈</span>,
        moon : <span className={className}>🌙</span>,
        sun : <span className={className}>🌤️</span>,
        english : <span className={className}>🍕</span>,
        farsi : <span className={className}>🫖</span>,
        login : <span className={className}>🗝️</span>,
        signup : <span className={className}>📝</span>,
        spinner : <span className={className}>🔃</span>,
    }
  return icons[name] || null
}
