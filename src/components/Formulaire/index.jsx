import React, { useState } from "react";
import DOMPurify from "dompurify";
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

const Formulaire = ({ form }) => {
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
        "The first name is not valid, it does not contain enough letters and/or numbers";
    }

    // Validez le lastname
    if (!validateLastname(formData.lastname)) {
      newErrors.lastname =
        "The last name is not valid, it does not contain enough letters and/or numbers";
    }

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validez le message
    if (!validateMessage(formData.message)) {
      newErrors.message =
        "Your message must be at least 10 words and no more than 1000";
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

      toast.success("Form sent !");
    } else {
      toast.error("The form contains errors. Please correct the fields.");
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
        toast.error("Failed to send form.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred.");
    }
  };

  return (
    <>
      {form}
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <div className={styles.__form_element}>
          <InputField
            name="firstname"
            label="
            First Name"
            value={formData.firstname}
            onChange={handleChange}
            error={errors.firstname}
            placeholder="Your first name here"
          />
        </div>
        <div className={styles.__form_element}>
          <InputField
            name="lastname"
            label="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
            placeholder="Your last name here"
          />
        </div>

        <div className={styles.__form_element}>
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your email here"
          />
        </div>
        <div className={styles.__form_element}>
          <TextareaField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Your message here"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer
        transition={Zoom}
        position="top-center"
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
