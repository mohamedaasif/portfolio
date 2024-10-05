import { Box } from "@mui/material";
import logo from "../../assets/logo_blue.png";
import styles from "./Header.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";
import avatar from "../../assets/avatar-rbg.png";

interface HeaderProps {
  activeSection: any;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Header = (props: HeaderProps) => {
  const { darkTheme, toggleTheme }: any = useContext<
    ThemeContextType | undefined
  >(ThemeContext);
  const {
    activeSection,
    scrollToSection,
    homeRef,
    aboutRef,
    experienceRef,
    projectRef,
    contactRef,
  } = props;
  return (
    <Box
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "0px 10px", md: "0px 190px" },
        borderBottom: darkTheme
          ? "2px solid var(--text-primary)"
          : "2px solid var(--grey-color)",
        background: darkTheme ? "var(--background-color-dark)" : "var(--white)",
      }}
      className={styles.headerContainer}
    >
      <Box
        sx={{
          fontFamily: "var(--ff-black)",
          color: "var(--primary-main)",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          className={styles.img}
          src={avatar}
          alt="avatar"
          width="38px"
          height="38px"
        />
        Mohamed Aasif
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
        }}
        className={styles.headerPrimayItem}
      >
        <Box
          className={`${styles.headerLink} ${
            activeSection === homeRef.current ? styles.active : ""
          }`}
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </Box>
        <Box
          className={`${styles.headerLink} ${
            activeSection === aboutRef.current ? styles.active : ""
          }`}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </Box>
        <Box
          className={`${styles.headerLink} ${
            activeSection === experienceRef.current ? styles.active : ""
          }`}
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </Box>
        <Box
          className={`${styles.headerLink} ${
            activeSection === projectRef.current ? styles.active : ""
          }`}
          onClick={() => scrollToSection(projectRef)}
        >
          Projects
        </Box>
        {/* <Box className={styles.headerLink}>Blog</Box> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Box
          className={`${styles.headerLink} ${
            activeSection === contactRef.current ? styles.active : ""
          }`}
          sx={{
            border: darkTheme
              ? "2px solid var(--text-grey-800)"
              : "2px solid var(--grey-color-dark)",
            padding: "5px 10px",
            borderRadius: "8px",
          }}
          onClick={() => scrollToSection(contactRef)}
        >
          Say Hello
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: darkTheme
              ? "2px solid var(--text-grey-800)"
              : "2px solid var(--grey-color-dark)",
            padding: "2px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        >
          {!darkTheme ? (
            <DarkModeIcon
              sx={{
                color: "var(--primary-main)",
              }}
            />
          ) : (
            <LightModeIcon
              sx={{
                color: "var(--primary-main)",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
