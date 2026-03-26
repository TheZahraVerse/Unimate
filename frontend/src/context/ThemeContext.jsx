/*
    Theme Context Provider 
    Manages and provides the application-wide theme state (light/dark)
    using the useDarkMode custom hook. Enables easy theme toggling
    for all child components.
*/
import { createContext, useContext, useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

// Create the context with a default null value
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // use hook to manage theme state and toggle function
  const { theme, toggleTheme } = useDarkMode();

  // Provide the theme state and toggle function through the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// costum hook for easy access
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
