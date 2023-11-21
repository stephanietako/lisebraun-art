import React from "react";
import Formulaire from "../../components/Formulaire";
import HeaderTxt from "../../components/HeaderTxt";
// Assets
import backgroundImage from "../../assets/images/boueeHoriz.webp";
// Styles
import styles from "./styles.module.scss";

const Modal = ({ open, onClose, content, contentTxt }) => {
  if (!open) return null;

  const renderContentModal = () => {
    if (content) {
      return <Formulaire form={true} />;
    } else if (contentTxt) {
      return <HeaderTxt txts={contentTxt} />;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.overlay}>
      {" "}
      <img
        id={styles.__bg}
        src={backgroundImage}
        alt={"woman to the swimming pool"}
      />{" "}
      <div className={styles.__modalContainer}>
        <div className={styles.__modal_content}>
          <div onClick={onClose} className={styles.__closeBtn}>
            <p>close</p>
          </div>
          <div className={styles.__content}>{renderContentModal()}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
