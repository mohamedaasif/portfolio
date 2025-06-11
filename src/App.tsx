import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );

  return (
    <Box className={darkTheme ? styles.darkMode : styles.lightMode}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Box>
  );
}

export default App;
