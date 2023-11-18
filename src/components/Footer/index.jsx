import { Link } from "react-router-dom";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "../../assets/logo/galerielisebraun.png";
import KeepInTouch from "../KeepInTouch";

const Footer = ({ setOpenModal }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const takodevURL = process.env.REACT_APP_TAKO_URL;

  return (
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
          {" "}
          <span id={styles.__copyright}>
            <p> &#169;Copyright {currentYear}</p>
          </span>
        </li>
        <li>
          <div className={styles.__link_tako}>
            <a href={takodevURL} rel="noopener noreferrer">
              <p>tako dev</p>
            </a>
          </div>
        </li>
      </ul>
      <span id={styles.__contact}>
        <button
          className={styles.__arrow_modalBbtn}
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          {" "}
          <p>drop a message</p>
        </button>{" "}
      </span>
      <span id={styles.__keepintch}>
        <KeepInTouch />
      </span>
    </footer>
  );
};

export default Footer;
