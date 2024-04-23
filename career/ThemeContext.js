import React, { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () => ({
      colors: isDarkMode ? darkColors : lightColors,
      isDarkMode,
      setDarkMode,
    }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const lightColors = {
  background: "#FFFFFF",
  text: "#000000",
  secondaryText: "#616161",
  primary: "#9633AA",
  border: "#e3e3e3",
  headerText: "#929292",
};

const darkColors = {
  background: "#303030",
  text: "#FFFFFF",
  secondaryText: "#bbbbbb",
  primary: "#BA68C8",
  border: "#424242",
  headerText: "#D0D0D0",
};
