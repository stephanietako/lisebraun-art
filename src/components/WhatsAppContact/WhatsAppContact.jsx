import React from "react";
import styles from "./styles.module.scss"; // Assuming you have some styles for your button/link

const WhatsAppContact = () => {
  const phoneNumber = "15551234567"; // Your actual phone number
  const message = encodeURIComponent(
    "Hello, I'd like to contact you about your services!"
  ); // Your pre-filled message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className={styles.contactContainer}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        Contact us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppContact;
