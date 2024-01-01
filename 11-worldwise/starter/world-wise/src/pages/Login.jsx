import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import { useAuthContext } from '../contexts/FakeAuthenticationContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');
  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
    navigate('/app');
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate.apply('/app');
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">
            <span style={{ color: '#fff' }}>Login</span>
          </Button>
        </div>
      </form>
    </main>
  );
}
