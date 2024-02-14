import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();

  return (
    <ul className="divide-y-2 divide-gray-300">
      {data?.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
