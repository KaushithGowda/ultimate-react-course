import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const data = useLoaderData();

  return (
    <>
      {data?.map((item, i, a) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
