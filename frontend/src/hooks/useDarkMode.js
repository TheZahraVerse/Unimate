/*
    Custom Hook for Dark Mode Management
    Manages the theme (light/dark) by interacting with localStorage
    and applying a 'dark' class to the document element.
    Provides the current theme state and a function to toggle it.
*/
import React from 'react'
import { useEffect, useState } from "react";

export default function useDarkMode() {
  // check the storage for default theme
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // use system theme if there is nothing in storage
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  const [theme, setTheme] = useState(initialTheme);
  
  // Effect to apply the theme class to the document element
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}

