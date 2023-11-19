import { useState } from "react";
import { toast, ToastContainer, Zoom } from "../Toasts";
// Styles
import styles from "./styles.module.scss";

const InputField = ({ name, value, onChange, error }) => {
  return (
    <div className={styles.__form_element}>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Your ${name.toLowerCase()} here`}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

const KeepInTouch = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      toast.error(
        "Le formulaire contient des erreurs. Veuillez corriger les champs."
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <div className={styles.__form_element}>
          <InputField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
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

export default KeepInTouch;
