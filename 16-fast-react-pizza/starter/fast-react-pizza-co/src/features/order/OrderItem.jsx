import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients, lastIndex }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li
      className={`border-gray-300 py-2 ${lastIndex ? "border-b-2 border-t-2" : "border-t-2"}`}
    >
      <div className="flex justify-between">
        <p>
          <span className="font-semibold">{quantity}&times;</span>{" "}
          <span>{name}</span>
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="capitalize italic text-gray-400">
        {!isLoadingIngredients ? ingredients.join(", ") : "Loading..."}
      </p>
    </li>
  );
}

export default OrderItem;
