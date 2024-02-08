import Header from './Header';
import CartOverview from './../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>
          <Outlet />
        </h1>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
