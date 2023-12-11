function App() {
  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];
  const step = 2;

  function handlePrev() {
    console.log('Hey there! Prev');
  }

  function handleNext() {
    console.log('Hey there!Next');
  }

  return (
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
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
