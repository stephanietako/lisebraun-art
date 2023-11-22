import React, { useState, useEffect } from "react";
import LoaderSpinner from "../../components/LoaderSpinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimCircle from "../../components/AnimCircle";
import ArrowBtn from "../../components/ArrowBtn";
import Modal from "../../components/Modal";
import gif from "../../assets/gif/aqua.gif";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showContent] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    time();
  }, []);

  return (
    <div className={styles.home}>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <>
          <Header />
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            content={showContent}
          />
          <div className={styles.__container}>
            <AnimCircle />
          </div>
          <div className={styles.__section}>
            <div className={styles.__box}>
              <div className={styles.__box_content}>
                <div className={styles.__gif}>
                  <img src={gif} alt="event aqua art miami " />
                </div>
                <div className={styles.__txt}>
                  <p>
                    "I want to continue promoting arts and special pieces
                    internationally, meet a growing demand for high-quality and
                    rare products, build a collection based on encounters,
                    project stories of human beings."
                  </p>
                </div>
                <div id={styles.form} className={styles.__form_contact}>
                  <span id={styles.__title}>
                    <p>Contact</p>
                  </span>
                  <span id={styles.__txt}>
                    <p>Drop a message</p>
                    <ArrowBtn setOpenModal={setOpenModal} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.__footer}>
            <Footer setOpenModal={setOpenModal} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
