import Bill from './Bill';
import ResetButton from './ResetButton';
import Tip from './Tip';
import Total from './Total';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [tip, setTip] = useState([]);

  function handleBillChange(v) {
    setBill(v);
  }

  function handleTip(name, tip) {
    setTip((prev) => [...prev, { name, tip }]);
    calcTotal();
  }

  function calcTotal() {
    let temp = 0;
    tip.map((item) => {
      console.log(item.tip);
      if (!NaN === Number(item.tip)) temp += Number(item.tip);
      return null;
    });
    console.log(tip);
    console.log(temp);
    // setTotalBill(totalBill / tip.length);
  }

  return (
    <div className="App">
      <Bill bill={bill} handleBill={handleBillChange} />
      <Tip name="You" handleTip={handleTip}>
        How did you like the service?
      </Tip>
      <Tip name="Your Friend" handleTip={handleTip}>
        How did your friend like the service?
      </Tip>
      <Total totalBill={totalBill} />
      <ResetButton />
    </div>
  );
}

export default App;
