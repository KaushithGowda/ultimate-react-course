import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPizzas, getTotalPizzaPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const noOfPizzas = useSelector(getTotalPizzas);
  const totalPizzasPrice = useSelector(getTotalPizzaPrice);

  return (
    <div className="flex justify-between bg-gray-900 px-5 py-10">
      <p className="space-x-3 font-mono uppercase text-white">
        <span>{noOfPizzas} pizzas</span>
        <span>{formatCurrency(totalPizzasPrice)}</span>
      </p>
      <Link
        className="cursor-pointer space-x-3 font-mono uppercase text-white"
        to="/cart"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
