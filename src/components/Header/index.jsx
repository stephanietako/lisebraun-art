import React from "react";
// Styles
import styles from "./styles.module.scss";
const Header = () => {
  const instaURL = process.env.REACT_APP_INSTA_URL;
  return (
    <div className={styles.header}>
      <div className={styles.__container}>
        <ul className={styles.__list_header}>
          <li>art</li>
          <li>design</li>
          <li>creation</li>
        </ul>
        <div className={styles.__insta_link}>
          <a href={instaURL} target="_blank" rel="noopener noreferrer">
            <p>instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
