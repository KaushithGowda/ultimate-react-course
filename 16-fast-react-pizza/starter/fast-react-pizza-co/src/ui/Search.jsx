import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrder } from '../services/apiRestaurant';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setQuery(e.target.value)} placeholder="search" />
    </form>
  );
}

export async function loader({ params }) {
  return await getOrder(params.orderId);
}

export default Search;
