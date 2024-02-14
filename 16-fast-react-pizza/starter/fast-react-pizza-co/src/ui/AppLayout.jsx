import Header from './Header';
import Loader from './Loader';
import CartOverview from './../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const loader = navigation.state === 'loading';

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {loader === 'loading' && <Loader />}
      <Header />

      <main className="overflow-scroll bg-gray-200">
        <div className="mx-auto">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
