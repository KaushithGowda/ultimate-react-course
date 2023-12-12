const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Far away</h1>;
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.length > 0 &&
          initialItems.map((item) => <Item item={item} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
      <input type="checkbox" id="item-name" />
      <label htmlFor="item-name">
        {' '}
        {item.quantity} {item.description} ❌
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

function Form() {
  return (
    <div className="add-form">
      <input type="text" placeholder="Item Name" />
      <select name="Quantity" id="quantity">
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
    </div>
  );
}

export default App;
