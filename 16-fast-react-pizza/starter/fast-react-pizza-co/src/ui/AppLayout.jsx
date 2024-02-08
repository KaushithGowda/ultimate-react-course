import Header from './Header';
import Loader from './Loader';
import CartOverview from './../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const loader = navigation.state;

  return (
    <div>
      {loader === 'loading' && <Loader />}
      <Header />

      <main>
        <span>
          <Outlet />
        </span>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
