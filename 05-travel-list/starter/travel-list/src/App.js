import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAdd(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <Form addItems={handleAdd} />
      <PackingList items={items} deleteItems={handleDelete} />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Far away</h1>;
}

function PackingList({ items, deleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item deleteItems={deleteItems} item={item} key={item.id} />
          ))}
      </ul>
    </div>
  );
}

function Item({ item, deleteItems }) {
  return (
    <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
      <input type="checkbox" id="item-name" />
      <label htmlFor="item-name">
        {item.quantity} {item.des}{' '}
        <span onClick={() => deleteItems(item.id)}>❌</span>
      </label>
    </li>
  );
}

function Footer() {
  return (
    <footer className="stats">
      You have x Items on your list and packed x (x%) items!
    </footer>
  );
}

function Form({ addItems }) {
  const [des, setDes] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!des.length > 0) return;

    const newItem = { des, quantity, packed: false, id: Date.now() };
    addItems(newItem);

    setDes('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for the trip?</h3>
      <input
        type="text"
        placeholder="Item..."
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <select
        name="Quantity"
        id="quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <button>Add</button>
    </form>
  );
}

export default App;
