// Styles
import styles from "./styles.module.scss";
// Assets
import image from "../../assets/images/boueeHoriz.webp";
const Maintenance = () => {
  return (
    <div className={styles.maintenance}>
      <div className={styles.__container}>
        <div className={styles.__image}>
          <img src={image} alt="woman on buoy in the swimming pool" />
        </div>
        <div className={styles.__txt}>
          <p>Bientôt le site de Lise Braun art</p>
          <p>Développement en cours....</p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
