import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const styles = `

input,
select,
textarea {
    width: 100%;
    padding: 120px;
    font-size: 16px; 
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
}


input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #3498db; 
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


input[type=number] {
    -moz-appearance: textfield;
}

`;
const Update = () => {
  const product = useLoaderData();
  const { _id } = product;

  const [UpdateFromData, setFormData] = useState({
    image: product.image || "",
    name: product.name || "",
    brand: product.brand || "",
    category: product.category || "",
    price: product.price || "",
    description: product.description || "",
    rating: product.rating || "",
  });

  const [text, setText] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText(e.target.value);
    setFormData({
      ...UpdateFromData,
      [name]: value,
    });
  };

  const [brands, setBrands] = useState([]);
  console.log(product.image);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brand.json");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://b8a10-brandshop-server-side-ruhannn-fdjh9nltn-ruhans-projects.vercel.app/product-details/${_id}`,
        {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(UpdateFromData),
        }
      );

      if (response.ok) {
        toast.success("Product updated successfully!");
        setFormData({
          image: "",
          name: "",
          brand: "",
          category: "",
          price: "",
          description: "",
          rating: "",
        });
      } else {
        toast.error("Failed to update product. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="dark:bg-[#2f2b3a] h-auto">
      <style>{styles}</style>
      <div className="container mx-auto py-20  ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 dark:text-white lg:grid-cols-3 gap-8 max-w-3xl mx-auto ">
          <div className="mb-4 md:mb-0">
            <label htmlFor="image" className="block text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={UpdateFromData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={UpdateFromData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <label htmlFor="brand" className="block text-sm font-bold mb-2">
              Brand
            </label>
            <div className="relative">
              <select
                id="brand"
                name="brand"
                value={UpdateFromData.brand}
                onChange={handleChange}
                className="w-full appearance-none p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]">
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.brandName}>
                    {brand.brandName}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-0">
            <label htmlFor="category" className="block text-sm font-bold mb-2 ">
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={UpdateFromData.category}
                onChange={handleChange}
                className="w-full appearance-none p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]">
                <option value="">Select Category</option>
                <option value="Beverages">Beverages</option>
                <option value="FastFood">Fast Food</option>
                <option value="Coffee">Coffee</option>
                <option value="Snacks">Snacks</option>
                <option value="Dairy">Dairy</option>
                <option value="Cereals">Cereals</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-0">
            <label htmlFor="price" className="block text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={UpdateFromData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]"
            />
          </div>

          <div className="mb-4 md:mb-0">
            <label
              htmlFor="description"
              className="block text-sm font-bold mb-2">
              Short Description
            </label>
            <textarea
              id="description"
              name="description"
              value={UpdateFromData.description}
              onChange={handleChange}
              rows={Math.max(4, text.split("\n").length)}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]"></textarea>
          </div>

          <div className="mb-4 md:mb-0">
            <label htmlFor="rating" className="block text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={UpdateFromData.rating}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 bg-white dark:bg-[#76737e]"
            />
          </div>

          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full md:w-auto transition duration-300 ease-in-out focus:outline-none">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
