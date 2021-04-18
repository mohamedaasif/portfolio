import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../../styles/Footer/Footer.module.scss";

const Footer = () => {
  const location = useLocation();

  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{
    if(window.innerWidth < 480) {
      setIsMobile(true);
    }
  },[])
  

  const isActive = () => {
    if(location.pathname === "/"){
      return false;
    } else if(location.pathname === "/contact"){
      return false;
    }
    return true;
  }

  return (
    <div className={styles.wrapper}>
      {isActive() || isMobile ? (
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>
              <i className="far fa-copyright"></i> 2021 Mohamed Aasif
            </p>
          </div>

          <div className={styles.navbar}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName={styles.active}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about" activeClassName={styles.active}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/project" activeClassName={styles.active}>
                  project
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" activeClassName={styles.active}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
