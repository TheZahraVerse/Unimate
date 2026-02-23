/*
    Icon Button
    button that contains an icon controlled by on click
    used for dark mode, language and seen/unseen password etc
*/

import React from 'react'

export default function IconButton({icon, ...props}) {
  return (
    <Button {...props}>
        {icon}
    </Button>
  )
}
