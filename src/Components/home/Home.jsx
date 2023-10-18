import { useEffect, useState } from "react";

const Home = () => {
  const [brands, setBrands] = useState([]);

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

  return (
    <>
      <section className="dark:bg-[#1a1625]  flex items-center justify-center">
        <div className="container mx-auto bg-base-100 dark:bg-[#1a1625] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand, index) => (
              <div
                className="bg-white dark:bg-[#2b2735] p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                key={index}
              >
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={brand.image}
                  alt={brand.brandName}
                />
                <div>
                  <div className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">
                    {brand.brandName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
