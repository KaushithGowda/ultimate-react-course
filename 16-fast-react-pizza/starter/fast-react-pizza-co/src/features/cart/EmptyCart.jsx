import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-3 pt-5">
      <Link
        to="/menu"
        className="px-2 py-2 font-mono text-sm font-medium text-blue-600"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-5 text-center font-mono text-lg font-semibold sm:text-xl">
        Your cart is still empty.
        <br /> Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
