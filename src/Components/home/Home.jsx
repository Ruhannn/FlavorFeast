import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import FAQSection from "../FAQsection/FAQsection";
import ReviewList from "../ReviewList/ReviewList";
import Banner from "../Banner/Banner";

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
      <section className="dark:bg-[#1a1625]" >
        <Banner></Banner>
        <Welcome></Welcome>
        <div
          className="container mx-auto bg-base-100 dark:bg-[#1a1625] p-4"
          id="take-a-look">
          <h1 className="text-4xl text-center dark:text-white font-medium my-8">
            Our Brands
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {brands.map((brand, index) => (
              <Link
                to={`/Brands/${brand.brandName}`}
                className="bg-white dark:bg-[#2b2735] p-4 rounded-lg shadow-md transition duration-300 transform hover:animate-pulse hover:scale-95"
                key={index}>
                <img
                  className="w-full h-80 object-cover rounded-md mb-4"
                  src={brand.image}
                  alt={brand.brandName}
                />
                <div>
                  <div className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">
                    {brand.brandName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <img
            className="lg:h-[626px] h-[300px] hidden lg:block sticky top-0 max-w-full"
            src="https://cdn.discordapp.com/attachments/1151870132549865536/1160922550197555272/kamilike.png"
            alt="Satisfied Girl"
          />
          <ReviewList />
        </div>
        <FAQSection></FAQSection>
      </section>
    </>
  );
};

export default Home;
