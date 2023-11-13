import { useState } from "react";
import styles from "./styles.module.scss";

const InputField = ({ name, label, value, onChange, error }) => {
  return (
    <div className={styles.__form_element}>
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Ton ${label.toLowerCase()} ici`}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

const Formulaire = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validez l'e-mail
    if (!validateEmail(formData.email)) {
      newErrors.email = "L'e-mail n'est pas valide";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert(`Email: ${formData.email}`);
    } else {
      alert(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <InputField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formulaire;
