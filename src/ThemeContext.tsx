import { createContext, useState, ReactNode, FC, useEffect } from "react";

export interface ThemeContextType {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    let getTheme: any = sessionStorage.getItem("theme");
    if (getTheme) {
      getTheme = JSON.parse(getTheme);
      setDarkTheme(getTheme);
    } else {
      sessionStorage.setItem("theme", JSON.stringify(darkTheme));
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => {
      sessionStorage.setItem("theme", JSON.stringify(!prevTheme));
      return !prevTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
