import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "../../ui/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export const fakeCart = [];

function Cart() {
  const cart = useSelector(getCart);
  const name = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length > 0) return <EmptyCart />;

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
        <Button
          onClick={() => dispatch(clearItem())}
          classes={"ml-10"}
          type={"button"}
          btnType={"secondary"}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
