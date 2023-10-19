import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layout/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Components/home/Home";
import Login from "./Components/login_signup/Login";
import SignUp from "./Components/login_signup/SignUp";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Components/Details/Brands";
import AddProduct from "./Components/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Details/Product";
import PrivateRoute from "./Route/PrivateRoute";
import Update from "./Components/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Brands/:brandName",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/submit-form"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-details/${params?.id}`),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-details/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </AuthProvider>
  </React.StrictMode>
);
