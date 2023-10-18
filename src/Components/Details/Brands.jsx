import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const BrandDetail = () => {
  const brands = useLoaderData();
  const { brandName } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brand.json");
        const data = await response.json();
        const selectedBrand = data.find(
          (brand) => brand.brandName === brandName
        );
        setBrand(selectedBrand);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [brandName]);
  const filteredBrands = brands.filter((brand) => brand.brand === brandName);

  if (!brand) {
    return <div>Loading...</div>;
  }
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const Carousel = () => (
    <AutoplaySlider
      play={true}
      interval={6000}
      animation="foldOutAnimation"
      className="h-[600px] w-full object-top ">
      <div data-src={brand.CarouselImage1} />
      <div data-src={brand.CarouselImage2} />
      <div data-src={brand.CarouselImage3} />
    </AutoplaySlider>
  );
  return (
    <section className=" dark:bg-[#1a1625] py-8">
      <Carousel />
      <div className="grid grid-cols-1 gap-9 p-4 my-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-content-center items-center bg-base-100 dark:bg-[#1a1625]">
        {filteredBrands.map((brands) => (
          <div
            key={brands._id}
            className="card h-[600px] mx-5 bg-base-300 shadow-xl mb-4  dark:bg-[#0e0c14] dark:text-[#c5c3c9]">
            <figure className="relative">
              <img
                src={brands.image}
                alt={brands.name}
                className="w-full h-[300px] object-top object-cover dark:opacity-30 dark:hover:opacity-80 transition-all duration-300"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold mb-2">
                {brands.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{brands.description}</p>
              <div className="card-actions flex justify-between items-center">
                <div className="gap-5 flex items-center">
                  <div className="badge badge-outline text-sm">
                    {brands.category}
                  </div>
                  <div className="badge badge-outline text-sm">
                    {brands.rating}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    // onClick={() => handleEdit(brands._id)}
                    className="btn btn-outline btn-sm dark:text-[#c5c3c9]">
                    <FaEdit /> Edit
                  </button>
                  <button
                    // onClick={() => handleDelete(brands._id)}
                    className="btn btn-outline btn-sm text-red-500">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandDetail;
