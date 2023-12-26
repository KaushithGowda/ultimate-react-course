import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function CityItem({ city }) {
  return (
    <li>
      <Link to={`${city.id}`} className={styles.cityItem}>
        <span className={styles.name}>{city.cityName}</span>
        <span className={styles.emoji}>{city.emoji}</span>
        <span className={styles.date}>{formatDate(city.date)}</span>
        <span className={styles.deleteBtn}>x</span>
      </Link>
    </li>
  );
}

export default CityItem;
