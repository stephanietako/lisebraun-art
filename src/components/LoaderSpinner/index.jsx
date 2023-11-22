import { ThreeDots } from "react-loader-spinner";
// Styles
import styles from "./styles.module.scss";
const LoaderSpinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.__loader_container}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#808080"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName="loader_style"
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoaderSpinner;
