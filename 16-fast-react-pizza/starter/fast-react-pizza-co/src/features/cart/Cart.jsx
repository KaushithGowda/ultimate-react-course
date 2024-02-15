import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "../../ui/CartItem";
import { useSelector } from "react-redux";

export const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const name = useSelector((state) => state.user.username);

  return (
    <div className="px-3 pt-5">
      <Link
        to="/menu"
        className="px-2 py-2 font-mono text-sm font-medium text-blue-600"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-5 font-mono text-lg font-semibold sm:text-xl">
        Your cart, {name}
      </h2>

      <ul className="mt-5">
        {cart?.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="my-10 flex">
        <Button type={"Link"} btnType={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button classes={"ml-10"} type={"button"} btnType={"secondary"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
