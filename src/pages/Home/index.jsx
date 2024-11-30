import React, { useState, useEffect } from "react";
import LoaderSpinner from "../../components/LoaderSpinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//import AnimCircle from "../../components/AnimCircle";
//import ArrowBtn from "../../components/ArrowBtn";
import Modal from "../../components/Modal";
// Styles
import styles from "./styles.module.scss";
import ThreeCompt from "../../components/ThreeCompt";
//import InstagramRecentPost from "../../components/InstagramRecentPost";

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
      {/* <AnimCircle /> */}
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

          <div className={styles.__section}>
            <div className={styles.__box}>
              <div className={styles.__container}>
                <ThreeCompt />
              </div>
              <div className={styles.__box_content}>
                <div className={styles.__txt}>
                  <blockquote>
                    <p>
                      "I want to continue promoting arts and special pieces
                      internationally, meet a growing demand for high-quality
                      and rare products, build a collection based on encounters,
                      project stories of human beings."
                    </p>
                    <footer>
                      <cite>- Lise Braun art</cite>
                    </footer>
                  </blockquote>
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
