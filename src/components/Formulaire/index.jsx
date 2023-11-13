import React, { useState } from "react";
import DOMPurify from "dompurify";
import fetch from "node-fetch";
import { toast, ToastContainer, Zoom } from "../Toasts";
// Styles
import styles from "./styles.module.scss";

const InputField = ({ name, label, value, onChange, error, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

const TextareaField = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <textarea
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

const Formulaire = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFirstname = (firstname) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(firstname);
  };

  const validateLastname = (lastname) => {
    const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    return nameRegex.test(lastname);
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    const messageRegex = /^[\s\S]{10,1000}$/;
    return messageRegex.test(message);
  };

  const validateForm = () => {
    const newErrors = {};
    // Validez le firstname
    if (!validateFirstname(formData.firstname)) {
      newErrors.firstname =
        "Le prénom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    // Validez le lastname
    if (!validateLastname(formData.lastname)) {
      newErrors.lastname =
        "Le nom n'est pas valide, il comporte moins de lettres et/ou des chiffres";
    }

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
    }

    // Validez le message
    if (!validateMessage(formData.message)) {
      newErrors.message =
        "Votre message doit comporter au moins 10 mots et pas plus de 1000";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const backendUrl = process.env.REACT_APP_URL_BACK_PROD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });

    if (validateForm()) {
      DOMPurify.sanitize(formData.firstname);
      DOMPurify.sanitize(formData.lastname);
      DOMPurify.sanitize(formData.email);
      DOMPurify.sanitize(formData.message);

      toast.success("Formulaire envoyé !");
    } else {
      toast.error(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }

    try {
      const response = await fetch(`${backendUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form sent successfully!");
      } else {
        console.error("Failed to send form.");
        toast.error("Une erreur est survenue, essayez plus tard.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Une erreur est survenue, essayez plus tard.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <div className={styles.__form_element}>
          <InputField
            name="firstname"
            label="Prénom"
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
            placeholder="Ton Prénom ici"
          />
        </div>
        <div className={styles.__form_element}>
          <InputField
            name="lastname"
            label="Nom"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
            placeholder="Ton Nom de Famille ici"
          />
        </div>

        <div className={styles.__form_element}>
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Ton e-mail ici"
          />
        </div>
        <div className={styles.__form_element}>
          <TextareaField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Ton message ici"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer
        transition={Zoom}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
export default Formulaire;
