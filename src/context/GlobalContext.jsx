import { Children, createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);
export const GlobalProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState("lightTheme");

  const themes = {
    darkTheme: {
      backgroundColor: "#1B1C1C",
      color: "#FDF2F8",
    },

    lightTheme: {
      backgroundColor: "#fff",
      color: "#333",
    },
  };

  const toggleTheme = () => {
    setActiveTheme((prev) =>
      prev === "lightTheme" ? "darkTheme" : "lightTheme",
    );
  };

  useEffect(() => {
    document.body.className = activeTheme;
  }, [activeTheme]);

  return (
    <GlobalContext.Provider
      value={{ toggleTheme, themes, activeTheme, setActiveTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
