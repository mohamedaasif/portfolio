import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/LoginAndSignup/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ArchiveProjects from "./components/Projects/ArchiveProjects";
import Footer from "./components/Footer/Footer";
import { useRef, useState, useEffect } from "react";
import Signup from "./pages/LoginAndSignup/Signup";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const AppRoutes = () => {
  const location = useLocation();

  const [isArchiveProjects, setIsArchiveProjects] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<any>("");
  const [scrollingByUser, setScrollingByUser] = useState<boolean>(true);

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setScrollingByUser(false);
    if (ref.current) {
      const headerOffset = 70;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollingByUser]);

  // Define routes where layout should be hidden
  const hideLayoutRoutes = ["/login", "/signup", "/dashboard"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>

      {!shouldHideLayout && (
        <>
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

          <Footer darkTheme={false /* pass from context if needed */} />
        </>
      )}
    </>
  );
};

export default AppRoutes;
