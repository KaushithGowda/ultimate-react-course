export default function Bill({ bill, handleBill }) {
  return (
    <div>
      <h2>How much was the bill?</h2>
      <input
        type="number"
        value={bill}
        onChange={(e) => handleBill(e.target.value)}
      />
    </div>
  );
}
