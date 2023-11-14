import React, { useState } from "react";
import Modal from "../../components/Modal";
// Styles
import styles from "./styles.module.scss";
import arrow from "../../assets/icon/arrow.png";

const Button = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className={styles.container}>
      <a
        href="/"
        className={styles.__arrow_modalBbtn}
        type="button"
        onClick={handleClick}
      >
        <img src={arrow} alt={"icon flèche"} />
      </a>

      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Button;
