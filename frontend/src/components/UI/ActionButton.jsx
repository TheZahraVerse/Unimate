/*
    Action Button:
    used for actions in the same page(delete, save, submit, add etc)
    controlled by on click 
    it has different variants(primary, danger, outline, ...)style types
*/

import React from 'react'

export default function ActionButton({children, variant, ...props}) {
  // set styles here(base style, variant style)
  const variants = {
    primary : "bg-(--primary) text-(--text-on-primary) hover:bg-(--hover) active:bg-(--active)",
    secondary : "bg-(--secondary) text-(--text-secondary) hover:bg-(--hover) ",
    submit : "bg-(--alert-success) text-(--text-on-primary) hover:border-(--border-focus) w-50",
    google : " bg-white text-black hover:border-(--border-focus) w-50"
  }
  return (
    <button className={`p-2 rounded cursor-pointer border border-(--border-default) ${variants[variant]}`} {...props}>
        {children}
    </button>
  )
}
