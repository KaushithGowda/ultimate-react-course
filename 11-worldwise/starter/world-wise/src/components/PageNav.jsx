import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';

function PageNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/product'}>Product</NavLink>
        </li>
        <li>
          <NavLink className="cta" to={'/login'}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
