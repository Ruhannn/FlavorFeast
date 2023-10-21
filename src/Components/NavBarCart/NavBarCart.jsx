import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBarCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://b8a10-brandshop-server-side-ruhannn-fdjh9nltn-ruhans-projects.vercel.app/cart?email=${user.email}`
        );
        cartItems.length;
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, [cartItems.length, user.email]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );
  return (
    <div key={cartItems.length} className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item ">
            {cartItems.length || "0"}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 z-50 card card-compact dropdown-content w-52 bg-base-100 dark:bg-[#1f1f36] shadow">
        <div className="card-body">
          <span className="font-bold text-lg dark:text-white">
            {cartItems.length} Items
          </span>
          <span className="text-info">total: ${totalPrice}</span>
          <div className="card-actions">
            <Link
              to="/cart"
              className="btn btn-primary bg-white text-black hover:text-white btn-block">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarCart;
