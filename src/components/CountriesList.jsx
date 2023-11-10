import Spinner from "./Spinner";
import Message from "./Message";

import styles from "./CountryList.module.css";
import CityItem from "./CityItem";

const CountriesList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CountriesList;
