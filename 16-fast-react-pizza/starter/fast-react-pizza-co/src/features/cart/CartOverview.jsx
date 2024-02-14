import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-gray-900 flex justify-between py-10 px-5">
      <p className="text-white space-x-3 font-mono uppercase">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link
        className="text-white space-x-3 font-mono uppercase cursor-pointer"
        to="/cart"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
