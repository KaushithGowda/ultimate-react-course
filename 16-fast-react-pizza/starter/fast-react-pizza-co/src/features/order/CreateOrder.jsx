import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = [];
  const formErrors = useActionData();
  const name = useSelector((state) => state.user.username);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-5 text-center text-xl font-semibold">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="grid gap-4">
        <div className="grid-row-[auto auto] grid items-center sm:grid-cols-[1fr_3fr] lg:grid-cols-[2fr_3fr_2fr]">
          <label className="font-mono">First Name</label>
          <input
            className="input px-3 py-1"
            type="text"
            name="customer"
            required
            defaultValue={name}
          />
        </div>

        <div className="grid-row-[auto auto] mt-1 grid sm:grid-cols-[1fr_3fr] lg:grid-cols-[2fr_3fr_2fr]">
          <label className="font-mono">Phone number</label>
          <div>
            <input
              className="input w-full px-3 py-1"
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <div className="mt-2 grid w-full items-center rounded-md bg-red-100 px-3 py-1 text-red-700">
                {formErrors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="grid-row-[auto auto] grid items-center sm:grid-cols-[1fr_3fr]  lg:grid-cols-[2fr_3fr_2fr]">
          <label className="font-mono">Address</label>
          <input
            type="text"
            name="address"
            className="input px-3 py-1"
            required
          />
        </div>

        <div className="space-x-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-400"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-mono" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          <Button btnType={"primary"}>Order now</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const orderData = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(orderData.phone)) {
    errors.phone = `Please enter a valid contact number!`;
  }

  if (Object.keys(errors).length > 0) return errors;

  // const order = await createOrder(orderData);

  // return redirect(`/order/${order.id}`);
  return null;
}

export default CreateOrder;
