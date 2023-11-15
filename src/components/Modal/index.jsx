import React from "react";
import Formulaire from "../../components/Formulaire";
import HeaderTxt from "../../components/HeaderTxt";
// Styles
import styles from "./styles.module.scss";

const Modal = ({ open, onClose, content, contentTxt }) => {
  if (!open) return null;

  const renderContentModal = () => {
    if (content) {
      return <Formulaire form={true} />;
    } else if (contentTxt) {
      return <HeaderTxt txts={true} />;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.overlay}>
      {" "}
      <div className={styles.__modalContainer}>
        <div className={styles.__modal_content}>
          <p onClick={onClose} className={styles.__closeBtn}>
            x
          </p>
          <div className={styles.__content}>{renderContentModal()}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
