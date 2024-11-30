import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
// Styles
import styles from "./styles.module.scss";
const Network = () => {
  return (
    <div>
      <div className={styles.network}>
        <InstagramEmbed
          id={styles.network}
          url="https://www.instagram.com/p/DCjFkAEIQ4R/"
          width={328}
          captioned
        />
      </div>
    </div>
  );
};

export default Network;
