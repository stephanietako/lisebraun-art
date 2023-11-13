import { Link } from "react-router-dom";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "../../assets/logo/logolb.png";
import KeepInTouch from "../KeepInTouch";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <footer>
        <ul>
          <li>
            <a href="#welcome">
              <img
                className={styles.__logo}
                src={logo}
                alt="lise Braun art logo"
              />
            </a>
          </li>
          <li>
            <Link to="terms">Mentions légales</Link>
          </li>
          <li>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </li>
        </ul>
        <div className={styles.__keepintch}>
          <KeepInTouch />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
