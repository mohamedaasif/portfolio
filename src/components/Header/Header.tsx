import { Box } from "@mui/material";
import logo from "../../assets/logo_blue.png";
import styles from "./Header.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../ThemeContext";

const Header = () => {
  const { darkTheme, toggleTheme }: any = useContext<
    ThemeContextType | undefined
  >(ThemeContext);
  return (
    <Box
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 200px",
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
        }}
      >
        Mohamed Aasif
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Box className={styles.headerLink}>Home</Box>
        <Box className={styles.headerLink}>About</Box>
        <Box className={styles.headerLink}>Experience</Box>
        <Box className={styles.headerLink}>Projects</Box>
        <Box className={styles.headerLink}>Blog</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Box
          className={styles.headerLink}
          sx={{
            border: darkTheme
              ? "2px solid var(--text-grey-800)"
              : "2px solid var(--grey-color-dark)",
            padding: "5px 10px",
            borderRadius: "8px",
          }}
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
