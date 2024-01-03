import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, logState } from './store';
import { deposit } from './features/accounts/accountSlice';

store.dispatch(deposit(300));
logState();
store.dispatch(deposit(100));
logState();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
