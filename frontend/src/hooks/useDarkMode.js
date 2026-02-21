import React from 'react'
import { useEffect, useState } from "react";
/*
   useDarkMode
   Manages a Dark/Light theme using a boolean state.
   Automatically adds or removes the "dark" class to the document root.
 */
export default function useDarkMode() {
    // to keep the current mode
  const [isDark, setIsDark] = useState(false);

  // set or remove dark from html class
  useEffect(() =>{
    if(isDark){
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // make the function to toggle based on isDark
  const toggleDark = () => {
    setIsDark(!isDark);
  }

  return [isDark, toggleDark];
}
