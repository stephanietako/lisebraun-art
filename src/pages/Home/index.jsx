import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Assets
import image from "../../assets/images/boueeHoriz.webp";
// Styles
import styles from "./styles.module.scss";
import AnimCircle from "../../components/AnimCircle";

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
        <div className={styles.__section}></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
