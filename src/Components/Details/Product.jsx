import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Product = () => {
  const item = useLoaderData();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-2 dark:bg-[#1a1625]">
<div className="md:border-2 mx-4 md:border-gray-400 md:rounded-lg md:p-4 mb-4 md:mb-0 group overflow-hidden relative transition duration-500 ease-in-out">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-90 object-cover mb-4 md:mb-0 transition-transform transform group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
    <p className="text-white text-lg font-bold">{item.name}</p>
  </div>
</div>


      <div className="md:ml-4 bg-slate-100 rounded-lg p-4 mx-4 dark:text-white dark:bg-[#131119]">
        <h1 className="text-2xl lg:text-5xl md:text-4xl font-bold mb-2 md:mb-4">
          {item.name}
        </h1>
        <p className="text-gray-600 dark:text-white">Brand: {item.brand}</p>
        <p className="text-gray-600 font-bold dark:text-white">Category: {item.category}</p>
        <p className="text-green-600 font-bold dark:text-white">Price: ${item.price}</p>
        <p className="text-gray-700 mb-2 md:mb-4 dark:text-white">
          Description: {item.description}
        </p>
        <div className="flex items-center">
          <p className="text-gray-600 mr-2 dark:text-white ">Rating:</p>
          <div className="flex items-center">
            {Array.from({ length: item.rating }, (_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 47.94 47.94"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-current"
                  d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                C22.602,0.567,25.338,0.567,26.285,2.486z"
                />
              </svg>
            ))}
          </div>
        </div>
          <Link className="btn bg-green-300 border-none dark:bg-slate-200 dark:hover:bg-slate-400 mt-6"><AiOutlineShoppingCart className="text-lg"></AiOutlineShoppingCart> Add to Cart</Link>
      </div>
    </div>
  );
};

export default Product;
