import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.name}>{city.cityName}</span>
      <span className={styles.emoji}>{city.emoji}</span>
      <span className={styles.date}>{formatDate(city.date)}</span>
      <span className={styles.deleteBtn}>x</span>
    </li>
  );
}

export default CityItem;
