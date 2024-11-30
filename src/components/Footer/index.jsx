import { Link } from "react-router-dom";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "../../assets/logo/logolbwhite.png";
//import KeepInTouch from "../KeepInTouch";

const Footer = ({ setOpenModal }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const takodevURL = process.env.REACT_APP_TAKO_URL;

  const handleMailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:lisebraunmail@gmail.com";
  };
  return (
    <footer>
      <ul>
        <li>
          <div className={styles.__logo}>
            <img src={logo} alt="lise Braun art gallery logo" />
          </div>
        </li>
        <li>
          <Link to="terms">Terms</Link>
        </li>
        <li>
          <span id={styles.__copyright}>
            <p> &#169;Copyright {currentYear} </p>
          </span>
        </li>
        <li>
          <span>
            <a href={takodevURL} rel="noopener noreferrer">
              <p>tako dev</p>
            </a>
          </span>
        </li>
      </ul>
      <div className={styles.__action_elements}>
        {/* <span id={styles.__contact}>
          <button
            className={styles.__arrow_modalBbtn}
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
          >
            {" "}
            <p>contact me here</p>
          </button>{" "}
        </span> */}
        <span id={styles.__contact}>
          <button
            className={styles.__arrow_modalBbtn}
            onClick={handleMailClick}
          >
            <p>Contact me here</p>
          </button>
        </span>
        {/* <span id={styles.__keepintch}>
          <KeepInTouch />
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
