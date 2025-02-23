import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeContext";
import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ArchiveProjects from "./components/Projects/ArchiveProjects";
import Footer from "./components/Footer/Footer";

function App() {
  const { darkTheme }: any = useContext<ThemeContextType | undefined>(
    ThemeContext
  );
  const [isArchiveProjects, setIsArchiveProjects] = useState<boolean>(false);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<any>("");
  const [scrollingByUser, setScrollingByUser] = useState<boolean>(true);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setScrollingByUser(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

      const headerOffset = 70;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(ref.current);
    }
    setTimeout(() => {
      setScrollingByUser(true);
    }, 1000);
  };

  const sections = [
    { ref: homeRef },
    { ref: aboutRef },
    { ref: experienceRef },
    { ref: projectRef },
    { ref: contactRef },
  ];

  const handleScroll = () => {
    if (!scrollingByUser) return;
    const scrollPosition = window.scrollY + 300;
    sections.forEach(({ ref }) => {
      if (ref.current) {
        const sectionTop = ref.current.offsetTop;
        const sectionBottom = sectionTop + ref.current.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(ref.current);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingByUser]);

  return (
    <Box className={darkTheme ? styles.darkMode : styles.lightMode}>
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      {!isArchiveProjects ? (
        <>
          <Home homeRef={homeRef} />
          <About aboutRef={aboutRef} />
          <Experience experienceRef={experienceRef} />
          <Projects
            scrollToSection={scrollToSection}
            projectRef={projectRef}
            setIsArchiveProjects={setIsArchiveProjects}
          />
          <Contact contactRef={contactRef} />
        </>
      ) : (
        <ArchiveProjects setIsArchiveProjects={setIsArchiveProjects} />
      )}
      <Footer darkTheme={darkTheme} />
    </Box>
  );
}

export default App;
