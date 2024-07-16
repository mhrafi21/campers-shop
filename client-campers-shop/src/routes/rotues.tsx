import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../Error-page";
import HomePage from "../pages/Home/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductsPage from "../pages/productPage/ProductsPage";
import ProductManagementPage from "../pages/ProductManagement/ProductManagementPage";
import ProductDetailsPage from "../pages/productPage/ProductDetailsPage";
import CheckoutPage from "../pages/CheckOutPage/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";
import CategoryProduct from "../pages/Home/CategoryProduct";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },

      {
        path: "/product-management",
        element: <ProductManagementPage />,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryProduct></CategoryProduct>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },

      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

export default router;
