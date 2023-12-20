/* eslint-disable no-throw-literal */
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from 'react';

const Key = 'https://api.frankfurter.app/latest?amount=';

export default function App() {
  const [input, setInput] = useState(0);
  const [fromCur, setFromCur] = useState('USD');
  const [toCur, setToCur] = useState('EUR');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function convert() {
      try {
        if (toCur === fromCur)
          throw `You are trying to convert ${toCur} to ${fromCur}. Try different currency conversion!`;
        if (toCur !== fromCur) setError('');
        if (input < 1) return;
        setLoading(true);
        const res = await fetch(`${Key}${input}&from=${fromCur}&to=${toCur}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setOutput(
          `${fromCur} ${input} = ${
            data.rates[Object.keys(data.rates)[0]]
          } ${toCur}`
        );
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    convert();
    return () => {
      controller.abort();
    };
  }, [fromCur, toCur, input, output]);

  return (
    <div>
      <input
        disabled={loading}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        disabled={loading}
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        disabled={loading}
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <div>
        <div>
          <span>OUTPUT: </span>
        </div>
        <div>
          <span>{output}</span>
          <span>{error && <Error message={error} />}.</span>
        </div>
      </div>
    </div>
  );
}

function Error({ message }) {
  return <p>{message}</p>;
}
