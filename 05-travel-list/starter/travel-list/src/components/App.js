import { useState } from 'react';
import { Header } from './Header';
import { PackingList } from './PackingList';
import { Footer } from './Footer';
import { Form } from './Form';

function App() {
  const [items, setItems] = useState([]);

  function handleAdd(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const res = window.confirm('Are you sure you want to clear your items?');
    if (res) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form addItems={handleAdd} />
      <PackingList
        items={items}
        toggleItems={handleToggle}
        deleteItems={handleDelete}
        clearItems={clearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
