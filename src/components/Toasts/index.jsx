import { toast, ToastContainer, Zoom } from "react-toastify";
// Styles
import "react-toastify/dist/ReactToastify.css";

const notify = (message) => {
  toast(message, {
    transition: Zoom,
    hideProgressBar: true,
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { ToastContainer, notify, Zoom, toast };
