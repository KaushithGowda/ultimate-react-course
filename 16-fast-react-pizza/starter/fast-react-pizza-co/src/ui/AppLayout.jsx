import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "./../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const loader = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-200">
      {loader === "loading" && <Loader />}
      <Header />

      <main className="h-full overflow-scroll bg-gray-200">
        <div className="mx-auto my-auto h-full max-w-5xl items-center justify-center">
          <Outlet />
        </div>
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
