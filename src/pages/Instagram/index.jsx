import React from "react";
import InstagramRecentPost from "../../components/InstagramRecentPost";
// Styles
import styles from "./styles.module.scss";

const Instagram = () => {
  return (
    <div className={styles.insta_page__container}>
      <InstagramRecentPost />
    </div>
  );
};

export default Instagram;
