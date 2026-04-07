/*
    Icon Button
    button that contains an icon controlled by onClick
    used for dark mode, language and seen/unseen password etc
*/

import React from 'react'
import Icon from '../../shared/Icon'

export default function IconButton({ iconName , onClick, className = "" , iconClassName = "w-6 h-6"}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer
         hover:bg-(--hover) active:bg-(--active) transition-colors ${className}`}
    >
      {/* setup icon in the button  */}
      <Icon name={iconName} className={iconClassName}/>
    </button>
  )
}
