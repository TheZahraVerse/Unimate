/*
    Link Button :
    only used for navigating between pages
    controlled by href as props
*/

import { Link } from "@inertiajs/react";
import React from 'react'

export default function LinkButton({href, children, ...props}) {
  return (
    <Link href={href} {...props}>
        {/* {children} */}
        Link Button
    </Link>
  )
}
