import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <p>App</p>
    </div>
  );
};

export default AppLayout;
