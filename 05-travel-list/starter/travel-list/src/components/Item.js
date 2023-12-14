export function Item({ item, toggleItems, deleteItems }) {
  return (
    <li>
      <input
        onClick={() => toggleItems(item.id)}
        type="checkbox"
        value={item.packed}
      />
      <p style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.des}{' '}
      </p>
      <span onClick={() => deleteItems(item.id)}>❌</span>
    </li>
  );
}
