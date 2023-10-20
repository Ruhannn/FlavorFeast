import { useContext } from "react";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`https://b8a10-brandshop-server-side-ruhannn-fdjh9nltn-ruhans-projects.vercel.app/cart?email=${user.email}`);
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [user.email]);


const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);


const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b8a10-brandshop-server-side-ruhannn-fdjh9nltn-ruhans-projects.vercel.app/cart/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              console.log(data.error);
            } else if (data.deletedCount > 0) {
              setCartItems((prevItems) =>
                prevItems.filter((item) => item._id !== _id)
              );
  
              Swal.fire('Deleted!', 'Your Product has been deleted.', 'success');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <section className="dark:bg-[#211f2a] transition-colors duration-300 h-auto">
      <div className="container mx-auto p-4">
        {cartItems.length === 0 && (
          <div className="text-center flex justify-center flex-col items-center text-3xl h-screen">
            <h1 className="dark:text-white">Your cart is empty. Add items to see them here!</h1>
            <img src="https://i.ibb.co/8spYC1V/preview-transformed.png" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.category}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-outline btn-sm text-red-500">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <p className="text-center dark:text-white font-bold text-xl mt-4">
            Total Price: $ {totalPrice.toFixed(2)}
          </p>
        )}
      </div>
    </section>
  );
};

export default Cart;
