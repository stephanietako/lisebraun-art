import React from "react";
import Formulaire from "../../components/Formulaire";
// Styles
import styles from "./styles.module.scss";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      {" "}
      <div className={styles.__modalContainer}>
        <div className={styles.__modalRight}>
          <p onClick={onClose} className={styles.__closeBtn}>
            X
          </p>
          <div className={styles.__content}>
            <Formulaire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
