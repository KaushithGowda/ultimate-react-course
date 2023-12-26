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
  const { cityName, position, emoji, date, id } = city;
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.name}>{cityName}</span>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.date}>{formatDate(date)}</span>
        <span className={styles.deleteBtn}>x</span>
      </Link>
    </li>
  );
}

export default CityItem;
