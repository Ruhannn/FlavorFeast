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
import 'react-toastify/dist/ReactToastify.css';
import Details from "./Components/Details/Brands";
import AddProduct from "./Components/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
  


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
        loader:() => fetch("http://localhost:5000/submit-form"),
      },
      {
        path: "/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
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
