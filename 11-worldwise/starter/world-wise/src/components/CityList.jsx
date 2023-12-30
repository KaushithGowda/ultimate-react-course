import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import { useCityContext } from '../contexts/CitiesContext';

function CityList() {
  const { cities, isLoading } = useCityContext();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message={'Click on the map and add a city'} />;
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
