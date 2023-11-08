import styles from "./CityList.module.css";
import Spinner from "./Spinner";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  return <ul className={styles.cityList}>CityList</ul>;
};

export default CityList;
