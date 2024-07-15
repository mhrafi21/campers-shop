import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../Error-page";
import HomePage from "../pages/Home/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductsPage from "../pages/productPage/ProductsPage";
import ProductManagementPage from "../pages/ProductManagement/ProductManagementPage";
import CartPage from "../pages/Cart/CartPage";
import ProductDetailsPage from "../pages/productPage/ProductDetailsPage";
import CheckoutPage from "../pages/CheckOutPage/CheckoutPage";
import SuccessPage from "../pages/SuccessPage";

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
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      // Add more routes here as needed, e.g., /contact, /products, etc.
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

export default router;
