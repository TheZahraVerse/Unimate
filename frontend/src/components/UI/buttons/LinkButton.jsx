/*
    Link Button :
    only used for navigating between pages
    controlled by href as props
*/

import { Link } from "@inertiajs/react";
import React from 'react'

export default function LinkButton({href, children, ...props}) {
  return (
    <Link href={href}  
    className={`px-5 py-2 rounded-full transition
    bg-(--button-primary) text-(--button-primary-text) ${props.className}`}>
        {/* {children} */}
        {props.text}
    </Link>
  )
}
