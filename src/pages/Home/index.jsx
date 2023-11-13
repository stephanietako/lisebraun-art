import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Formulaire from "../../components/Formulaire";

import AnimCircle from "../../components/AnimCircle";
// Assets
import image from "../../assets/images/boueeHoriz.webp";
import gif from "../../assets/gif/aqua.gif";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.__container}>
          <AnimCircle />
          <div className={styles.__image}>
            <img src={image} alt="woman on buoy in the swimming pool" />
          </div>
        </div>
        <div className={styles.__section}>
          <div className={styles.__box}>
            <div className={styles.__box_content}>
              <div className={styles.__gif}>
                <img src={gif} alt="event aqua art miami " />
              </div>
              <p>
                "I want to continue promoting arts and special pieces
                internationaly, meet a growing demand for hight quality and rare
                products, build a collection based on encounters, projects
                stories of human beings."
              </p>
              <div className={styles.__form_contact}>
                <Formulaire />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
