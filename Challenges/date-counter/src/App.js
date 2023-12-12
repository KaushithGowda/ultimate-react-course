import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date();

  function dateUpdate(type) {
    if (type === 'incr') {
      setCount((c) => c + 1);
      date.setUTCDate(step + date.getDate());
    } else if (type === 'decr' && count > 0) {
      setCount((c) => c - 1);
      date.setUTCDate(date.getDate() - step);
    }
  }

  function stepChange(type) {
    if (type === 'incr') setStep((s) => s + 1);
    else if (type === 'decr' && step > 0) setStep((s) => s - 1);
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={() => dateUpdate('incr')}>+</button>
        <span>Count : {count}</span>
        <button onClick={() => dateUpdate('decr')}>-</button>
      </div>
      <div className="container">
        <button onClick={() => stepChange('incr')}>+</button>
        <span>Step : {step}</span>
        <button onClick={() => stepChange('decr')}>-</button>
      </div>
      <div className="container">
        <span>Date : {date.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default App;
