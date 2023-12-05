import { createContext, useEffect, useState, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currntCity, setCurrentCity] = useState({});

  const BASE_URL =
    "https://raw.githubusercontent.com/Nmohd/data/main/cities.json";

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setCities(data.cities);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);


function getCity(id) {
  
}




  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currntCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
