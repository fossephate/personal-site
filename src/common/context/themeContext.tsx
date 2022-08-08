import React, { useState, useEffect } from "react";
export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

// @ts-ignore
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem("theme");
      return theme || "dark";
    }
    setTheme(loadTheme());
  }, []);
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // @ts-ignore
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
