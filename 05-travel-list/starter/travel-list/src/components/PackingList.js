import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, toggleItems, deleteItems, clearItems }) {
  const [option, setOption] = useState('input');
  let sortedItems;

  if (option === 'input') {
    sortedItems = items;
  }
  if (option === 'des') {
    sortedItems = items.slice().sort((a, b) => a.des.localeCompare(b.des));
  }
  if (option === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.length > 0 &&
          sortedItems.map((item) => (
            <Item
              toggleItems={toggleItems}
              deleteItems={deleteItems}
              item={item}
              key={item.id}
            />
          ))}
      </ul>
      <div className="actions">
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value={'input'}>Sorting by Input</option>
          <option value={'des'}>Sorting by Description</option>
          <option value={'packed'}>Sorting by Packed Items</option>
        </select>
        <button onClick={() => clearItems()}>Clear</button>
      </div>
    </div>
  );
}
