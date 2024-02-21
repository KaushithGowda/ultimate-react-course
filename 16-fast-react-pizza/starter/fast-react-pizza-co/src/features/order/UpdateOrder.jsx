import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="flex items-end justify-end py-3">
      <Button btnType={"primary"}>Make Priority</Button>
    </fetcher.Form>
  );
}

export const action = async ({ requests, params }) => {
  console.log(params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
