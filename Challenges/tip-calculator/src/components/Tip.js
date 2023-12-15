export default function Tip({ name, handleTip, children }) {
  return (
    <div>
      <h2>{children}</h2>
      <select onChange={(e) => handleTip(name, e.target.value)}>
        <option value={5}>C (5%)</option>
        <option value={10}>B (10%)</option>
        <option default value={15}>
          A (15%)
        </option>
        <option value={20}>A+ (20%)</option>
      </select>
    </div>
  );
}
