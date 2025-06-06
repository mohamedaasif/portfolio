import { Box } from "@mui/material";
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
        padding: { xs: "0px 10px", lg: "0px 190px" },
        borderBottom: darkTheme
          ? "1px solid var(--dark_border_color)"
          : "1px solid var(--light_border_color)",
        background: darkTheme
          ? "var(--dark_bg_color)"
          : "var(--light_bg_color)",
      }}
      className={styles.headerContainer}
    >
      <Box
        sx={{
          fontFamily: "var(--ff-semibold)",
          color: darkTheme
            ? "var(--dark_accent_color)"
            : "var(--light_accent_color)",
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
            darkTheme ? styles.headerLinkDark : styles.headerLinkLight
          } ${
            activeSection === homeRef.current
              ? darkTheme
                ? styles.activeDark
                : styles.activeLight
              : ""
          }`}
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </Box>
        <Box
          className={`${styles.headerLink} ${
            darkTheme ? styles.headerLinkDark : styles.headerLinkLight
          } ${
            activeSection === aboutRef.current
              ? darkTheme
                ? styles.activeDark
                : styles.activeLight
              : ""
          }`}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </Box>
        <Box
          className={`${styles.headerLink} ${
            darkTheme ? styles.headerLinkDark : styles.headerLinkLight
          } ${
            activeSection === experienceRef.current
              ? darkTheme
                ? styles.activeDark
                : styles.activeLight
              : ""
          }`}
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </Box>
        <Box
          className={`${styles.headerLink} ${
            darkTheme ? styles.headerLinkDark : styles.headerLinkLight
          } ${
            activeSection === projectRef.current
              ? darkTheme
                ? styles.activeDark
                : styles.activeLight
              : ""
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
            darkTheme ? styles.headerLinkDark : styles.headerLinkLight
          } ${
            activeSection === contactRef.current
              ? darkTheme
                ? styles.activeDark
                : styles.activeLight
              : ""
          }`}
          sx={{
            border: darkTheme
              ? "2px solid var(--dark_border_color)"
              : "2px solid var(--light_border_color)",
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
              ? "2px solid var(--dark_border_color)"
              : "2px solid var(--light_border_color)",
            padding: "2px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "& svg": {
              transition: "transform 0.4s ease, opacity 0.3s ease",
              transform: "rotate(0deg)",
              opacity: 1,
            },
            "&:active svg": {
              transform: "rotate(360deg)",
            },
          }}
          onClick={toggleTheme}
        >
          {!darkTheme ? (
            <DarkModeIcon
              sx={{
                color: "var(--dark_tag_bg_color)",
                transition: "transform 0.4s ease, opacity 0.3s ease",
              }}
            />
          ) : (
            <LightModeIcon
              sx={{
                color: "var(--light_tag_bg_color)",
                transition: "transform 0.4s ease, opacity 0.3s ease",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
