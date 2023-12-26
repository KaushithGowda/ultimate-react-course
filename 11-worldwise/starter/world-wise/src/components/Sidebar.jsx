import styles from './Sidebar.module.css';
import Logo from '../components/Logo';
import AppNav from '../components/AppNav';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        {' '}
        &copy; Copyright {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Sidebar;
