import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const CityContext = createContext();
const BASE_URL = 'http://localhost:8000';

const intialState = {
  isLoading: false,
  currentCity: {},
  cities: [],
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };

    case 'cities/loading':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case 'city/loading':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };

    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error('Unkown action type');
  }
}

function CityProvider({ children }) {
  const [{ isLoading, cities, currentCity }, dispatch] = useReducer(
    reducer,
    intialState
  );

  async function getCities() {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      dispatch({
        type: 'cities/loading',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createCity(newCity) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({
        type: 'city/created',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCity(id) {
    dispatch({ type: 'loading' });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'city/deleted', payload: id });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({
          type: 'city/loading',
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [currentCity.id]
  );

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
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
