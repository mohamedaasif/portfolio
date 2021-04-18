import styles from "../../styles/Navbar/Navbar.module.scss";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../image/logo.png";

const Navbar = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname : "/"
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>

         <img src={logo} alt=""/>
          <div className={styles.logoName} onClick={handleClick}>
            <p>Mohamed Aasif</p>
            <p>Frontend Developer</p>
          </div>
        </div>

       <div className={styles.navbar}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={styles.active} >Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName={styles.active}>About</NavLink>
            </li>
            <li>
              <NavLink exact to="/project" activeClassName={styles.active}>Projects</NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName={styles.active}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
