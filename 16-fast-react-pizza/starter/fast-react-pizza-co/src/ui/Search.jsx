import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full rounded-2xl px-4 py-1 placeholder-gray-500 outline-none transition-all duration-300 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 "
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
}

export async function loader({ params }) {
  return await getOrder(params.orderId);
}

export default Search;
