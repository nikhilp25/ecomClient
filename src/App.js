import Product from "./components/Product.js";
import Cart from "./components/Cart.js";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Checkout from "./components/Checkout.js";
import { createBrowserRouter, Outlet } from "react-router-dom";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default appRouter;
