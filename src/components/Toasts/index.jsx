import { toast, ToastContainer, Zoom } from "react-toastify";
// Styles
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";

const notify = (message) => {
  toast(message, {
    transition: Zoom,
    hideProgressBar: true,
    position: "bottom-left",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    zIndex: 9999,
    theme: "dark",
    className: "toast_container",
  });
};

export { ToastContainer, notify, Zoom, toast };
