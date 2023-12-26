import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();

  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');

  return (
    <div className={styles.mapContainer}>
      Map
      <h2>{lng}</h2>
      <h2>{lat}</h2>
      <button onClick={() => setSearchParam({ lat: 69, lng: 69 })}>
        Change pos
      </button>
    </div>
  );
}
export default Map;
