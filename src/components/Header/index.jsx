import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import WhatsAppContact from "../WhatsAppContact/WhatsAppContact";
// Styles
import styles from "./styles.module.scss";
// Assets
import menu from "../../assets/icon/menu.png";
import cross from "../../assets/icon/cross.png";
import logoDesk from "../../assets/logo/gblwhite.png";
import logoMobile from "../../assets/logo/logolbwhite.png";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTxt, setSelectedTxt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //const instaURL = process.env.REACT_APP_INSTA_URL;
  const listItems = ["art", "design", "curation"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1026);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1026);
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.header}>
      <a href="/">
        <div className={styles.__logo}>
          <img
            src={isMobile ? logoMobile : logoDesk}
            alt="lise Braun art gallery logo"
          />
        </div>
      </a>

      {/* Appel de l'import Modal*/}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        contentTxt={selectedTxt}
        listItems={listItems}
      />

      {/* Desktop */}
      <div className={styles.__container_desk}>
        <ul className={styles.__menu_desk}>
          <ListItem listItems={listItems} />
        </ul>
        <div
          className={styles.__whatsapp}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <WhatsAppContact />
        </div>
        {/* Lien Instagram */}
        <div className={styles.__insta_link}>
          <Link to="/instagram">
            <p>instagram</p>
          </Link>
        </div>
      </div>

      {/* Mobile */}

      <div className={styles.__container_mobile}>
        <div
          className={styles.__whatsapp}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <WhatsAppContact />
        </div>
        <div className={styles.__insta_link}>
          <Link to="/instagram">
            <p>instagram</p>
          </Link>
        </div>
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
