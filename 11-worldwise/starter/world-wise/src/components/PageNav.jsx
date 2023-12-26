import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  return (
    <div>
      <ul className={styles.sas}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/product'}>Product</NavLink>
        </li>
        <li>
          <NavLink to={'/page-not-found'}>Page Not Found❗️</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
