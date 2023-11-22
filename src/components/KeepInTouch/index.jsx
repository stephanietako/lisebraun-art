import { useState } from "react";
import { toast, ToastContainer, Zoom } from "../Toasts";
// Assets
import arrow from "../../assets/icon/arrow-white.png";
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
        placeholder={`Enter your ${name.toLowerCase()} here`}
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
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    // La Object.keys()méthode statique renvoie un tableau des noms de propriétés énumérables à clé de chaîne d'un objet donné.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      toast.success("Email sent!");
    } else {
      toast.error("An error occurred. Please enter a valid email address");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.__container_form}>
        <InputField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="submit">
          {" "}
          <img src={arrow} alt={"icon arrow to submit"}></img>
        </button>
      </form>
      <ToastContainer
        transition={Zoom}
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="toast_container"
      />
    </>
  );
};

export default KeepInTouch;
