import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";
import CartQuantity from "./CartQuantity";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <li className="mb-1 flex items-center justify-between border-b-2 border-gray-300 py-1 font-mono text-sm font-semibold sm:text-base">
      <div className="flex flex-col items-start justify-start gap-1 sm:flex-row sm:gap-5">
        <div className="flex gap-2">
          <span>{item.quantity}</span>
          <span>x</span>
          <span className="block sm:hidden"> {item.name}</span>
        </div>
        <div className="hidden sm:block">{item.name}</div>
        <div className="sm:hidden">${item.totalPrice.toFixed(2)}</div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="hidden sm:block">${item.totalPrice.toFixed(2)}</div>
        <CartQuantity id={item.pizzaId} />
      </div>
    </li>
  );
}
export default CartItem;
