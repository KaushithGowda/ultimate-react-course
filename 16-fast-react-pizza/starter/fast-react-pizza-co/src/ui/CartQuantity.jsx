import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  increaseItem,
  decreaseItem,
  deleteItem,
} from "../features/cart/cartSlice";
import { getQuantity } from "../features/cart/cartSlice";

function CartQuantity({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantity(id));

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() => dispatch(increaseItem(id))}
        btnType={"round"}
        classes={"mr-3"}
      >
        +
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={() => dispatch(decreaseItem(id))}
        btnType={"round"}
        classes={"mx-3"}
      >
        -
      </Button>
      <Button onClick={() => dispatch(deleteItem(id))} btnType={"primary"}>
        Delete
      </Button>
    </div>
  );
}

export default CartQuantity;
