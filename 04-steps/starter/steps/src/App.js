import { useState } from 'react';

function App() {
  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];
  const [step, stepStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) stepStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) stepStep((s) => s + 1);
  }

  return (
    <>
      <div>
        <button onClick={() => setIsOpen((is) => !is)} className="close">
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">{`Step messages ${step}: ${
            messages[step - 1]
          }`}</p>
          <div className="buttons">
            <Button click={handlePrev}>👈🏻 Previous</Button>
            <Button click={handleNext}>Next 👉🏻</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ click, children }) {
  return <button onClick={click}>{children}</button>;
}

export default App;
