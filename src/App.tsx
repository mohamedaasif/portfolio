import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  return (
    <Box className={darkTheme ? styles.darkMode : styles.lightMode}>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
