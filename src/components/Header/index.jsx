import React, { useState } from "react";
import Modal from "../../components/Modal";
import menu from "../../assets/icon/menu.png";
import cross from "../../assets/icon/cross.png";
import styles from "./styles.module.scss";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTxt, setSelectedTxt] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const instaURL = process.env.REACT_APP_INSTA_URL;
  const listItems = ["art", "design", "creation"];

  const ListItem = ({ text }) => (
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

  return (
    <div className={styles.header}>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        contentTxt={selectedTxt}
      />
      <div className={styles.__container_desk}>
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
      </div>
      {/* Mobile */}
      <div className={styles.__container_mobile}>
        <button className={styles.__burger_btn} onClick={toggleMenu}>
          <img src={isOpen ? cross : menu} alt={isOpen ? "Menu" : "Cross"} />
        </button>
        {isOpen && (
          <div className={styles.__menu_mobile}>
            {listItems.map((item) => (
              <ListItem key={item} text={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
