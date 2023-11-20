import { toast, ToastContainer, Zoom } from "react-toastify";
// Styles
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css"; // Importer un fichier de styles personnalisés
const notify = (message) => {
  toast(message, {
    transition: Zoom,
    hideProgressBar: true,
    position: "top-left",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { ToastContainer, notify, Zoom, toast };
