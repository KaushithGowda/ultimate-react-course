import styles from './Sidebar.module.css';
import Logo from '../components/Logo';
import AppNav from '../components/AppNav';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <footer className={styles.footer}> Copyright</footer>
    </div>
  );
}

export default Sidebar;
