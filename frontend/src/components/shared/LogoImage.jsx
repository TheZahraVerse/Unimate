/*
    Logo Image :
    a circle including logo image with border
*/

import React from 'react'


export default function LogoImage() {
  return (
    <div
      className="h-12 w-12 rounded-full 
      border border-black
      overflow-hidden shrink-0"
    >
      <img
        src='#'
        alt="logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
