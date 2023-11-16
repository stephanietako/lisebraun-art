import React, { useState } from "react";
import Modal from "../../components/Modal";
// Styles
import styles from "./styles.module.scss";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTxt, setSelectedTxt] = useState("");

  const instaURL = process.env.REACT_APP_INSTA_URL;
  const listItems = ["art", "design", "creation"];

  const ListItem = ({ text }) => {
    return (
      <button
        className={styles.__txt_modal}
        onClick={() => {
          setSelectedTxt(text);
          setOpenModal(true);
        }}
      >
        <li>{text}</li>
      </button>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.__container}>
        <ul className={styles.__list_header}>
          {listItems.map((item) => (
            <ListItem key={item} text={item} />
          ))}
        </ul>
        <div className={styles.__insta_link}>
          <a href={instaURL} target="_blank" rel="noopener noreferrer">
            <p>instagram</p>
          </a>
        </div>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          contentTxt={selectedTxt}
        />
      </div>
    </div>
  );
};

export default Header;
