import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ArchiveProjects from "./components/Projects/ArchiveProjects";

function App() {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  const [isArchiveProjects, setIsArchiveProjects] = useState<boolean>(false);
  return (
    <Box className={darkTheme ? styles.darkMode : styles.lightMode}>
      <Header />
      {!isArchiveProjects ? (
        <>
          <Home />
          <About />
          <Experience />
          <Projects setIsArchiveProjects={setIsArchiveProjects} />
          <Contact />
        </>
      ) : (
        <ArchiveProjects setIsArchiveProjects={setIsArchiveProjects} />
      )}
    </Box>
  );
}

export default App;
