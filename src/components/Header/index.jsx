import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import menu from "../../assets/icon/menu.png";
import cross from "../../assets/icon/cross.png";
import styles from "./styles.module.scss";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTxt, setSelectedTxt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const instaURL = process.env.REACT_APP_INSTA_URL;
  const listItems = ["art", "design", "creation"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1023);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fonction du click ouverture du modal et du texte cortrespondant
  const handleItemClick = (item) => {
    setSelectedTxt(item);
    setOpenModal(true);
  };

  // liste des textes dans les modals dans le menu principale et mobile avec le bouton pour l'ouverture du modal
  const ListItem = ({ listItems }) => (
    <div className={styles.__list_header}>
      {listItems.map((item) => (
        <button
          key={item}
          className={
            isMobile ? styles.__listItem_mobile_btn : styles.__listItem_btn
          }
          onClick={() => handleItemClick(item)}
        >
          <li>{item}</li>
        </button>
      ))}
    </div>
  );

  // Fonction pour basculer l'état du menu mobile entre ouvert et fermé
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.header}>
      {/* Appel de l'import Modal*/}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        contentTxt={selectedTxt}
      />

      {/* Desktop */}
      <div className={styles.__container_desk}>
        <ul className={styles.__menu_desk}>
          <ListItem listItems={listItems} />
        </ul>
        {/* Lien Instagram */}
        <div className={styles.__insta_link}>
          <a href={instaURL} rel="noopener noreferrer">
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
          <ul className={styles.__menu_mobile}>
            <ListItem listItems={listItems} />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
