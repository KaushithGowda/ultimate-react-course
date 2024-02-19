import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getQuantity } from "../cart/cartSlice";
import CartQuantity from "../../ui/CartQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantity(id));

  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li
      className={`flex gap-4 py-2 font-mono ${soldOut && "cursor-not-allowed"}`}
    >
      <img
        className={`h-24 ${soldOut && "opacity-50"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm font-extralight capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div
          className={`mt-auto flex items-center justify-between ${!soldOut ? "" : "text-slate-500"}`}
        >
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && !quantity && (
            <Button
              onClick={handleAddtoCart}
              disabled={soldOut}
              classes={"text-xs sm:text-base sm:px-3 sm:py-1"}
              btnType={"primary"}
            >
              Add to Cart
            </Button>
          )}
          {quantity ? <CartQuantity id={id} /> : <></>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
