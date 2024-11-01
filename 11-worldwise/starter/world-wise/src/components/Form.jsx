// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Form.module.css';
import BackButton from './BackButton';
import Spinner from './Spinner';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useCityContext } from '../contexts/CitiesContext';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState('');
  const [isGeoLoading, setIsGeoLoading] = useState(false);
  const [error, setError] = useState('');
  const [lat, lng] = useUrlPosition();
  const Base_Url = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
  const { createCity, isLoading } = useCityContext();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate('/app/cities');
  }

  useEffect(
    function () {
      async function getCountry() {
        try {
          setIsGeoLoading(true);
          setError('');
          const res = await fetch(
            `${Base_Url}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.countryCode) throw new Error('Please select a city!');
          setCityName(data.city || data.locality || '');
          setCountry(data.countryName || '');
          setEmoji(convertToEmoji(data.countryCode) || '');
        } catch (error) {
          setError(error.message);
        } finally {
          setIsGeoLoading(false);
        }
      }
      getCountry();
    },
    [lat, lng]
  );

  if (isGeoLoading) return <Spinner />;

  if (error) return <h2 className="error">{error}</h2>;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
