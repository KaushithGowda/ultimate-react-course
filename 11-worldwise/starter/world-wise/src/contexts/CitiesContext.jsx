import { createContext, useContext, useEffect, useState } from 'react';

const CityContext = createContext();
const BASE_URL = 'http://localhost:8000';

function CityProvider({ children }) {
  const [cities, setCities] = useState({});
  const [currentCity, setCurrentCity] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getCities() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCityContext() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error('This context cannot be used outside its children!');
  return context;
}

export { useCityContext, CityProvider };
