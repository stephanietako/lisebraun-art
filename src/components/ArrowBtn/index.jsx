// Styles
import styles from "./styles.module.scss";
// Assets
import arrow from "../../assets/icon/arrow.png";

const ArrowBtn = ({ setOpenModal }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.__arrow_modalBbtn}
        onClick={(e) => {
          e.preventDefault();
          setOpenModal(true);
        }}
      >
        {" "}
        <img src={arrow} alt={"icon flèche"}></img>
      </button>
    </div>
  );
};

export default ArrowBtn;
