// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import CartItem from "../../ui/CartItem";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-3 mt-2 font-mono">
      <div className="my-8 flex flex-col items-center justify-around sm:flex-row">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="flex items-center space-x-2 uppercase text-[#fff]">
          {priority && (
            <span className="grid items-center justify-center rounded-full bg-green-500 px-3 py-1">
              Priority
            </span>
          )}
          <span className="grid items-center justify-center rounded-full bg-red-500 px-3 py-1 text-[#fff]">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-stone-200 py-5 sm:flex-row sm:px-5">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="mt-5 border-gray-300 sm:px-5">
        {cart?.map((item, i, arr) => (
          <OrderItem
            lastIndex={arr.length - 1 === i}
            key={item.pizzaId}
            item={item}
          />
        ))}
      </ul>

      <div className="bg-stone-200 py-5 sm:px-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
