import React from "react";
import styles from "./styles.module.scss";
import Network from "../../components/Network";

const Instagram = () => {
  const instaURL = process.env.REACT_APP_INSTA_URL;

  return (
    <>
      <div className={styles.insta_page__container}>
        <div className={styles.insta_content}>
          <h1 className={styles.insta_title}>Connect with Us on Instagram</h1>
          <p className={styles.insta_text}>
            Follow our journey and stay up-to-date with the latest posts and
            updates. Discover the beauty of our work, connect with our
            community, and get inspired by our latest projects.
          </p>

          <a
            href={instaURL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.insta_link}
          >
            <Network />
          </a>
        </div>
      </div>
    </>
  );
};

export default Instagram;
