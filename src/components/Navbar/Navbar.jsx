import styles from "../../styles/Navbar/Navbar.module.scss";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../image/logo.png";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };
  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div className={styles.logoName} onClick={handleClick}>
            <p>Mohamed Aasif</p>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className={styles.navbar}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName={styles.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/project" activeClassName={styles.active}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName={styles.active}>
                Contact
              </NavLink>
            </li>
            <li
              className={
                isDarkTheme
                  ? `${styles.themeIconRight} ${styles.themeIcon}`
                  : styles.themeIcon
              }
              onClick={handleTheme}
            >
              {isDarkTheme ? (
                <DarkModeIcon className={styles.darkIcon} />
              ) : (
                <LightModeIcon className={styles.lightIcon} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
