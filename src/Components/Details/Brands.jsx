import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Loading from "../Loading/Loading";

const BrandDetail = () => {
  const { brandName } = useParams();
  const brands = useLoaderData();
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
    return <Loading></Loading>;
  }

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const Carousel = () => (
    <>
      <AutoplaySlider
        play={true}
        interval={6000}
        animation="foldOutAnimation"
        className="h-[600px] w-full object-top">
        <div data-src={brand.CarouselImage1} />
        <div data-src={brand.CarouselImage2} />
        <div data-src={brand.CarouselImage3} />
      </AutoplaySlider>
    </>
  );

  return (
    <section className="dark:bg-[#1a1625] py-8">
      <Carousel />
      {filteredBrands.length > 0 ? (
        <div className="grid grid-cols-1 gap-9 p-4 my-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-content-center items-center bg-base-100 dark:bg-[#1a1625]">
          {filteredBrands.map((brand) => (
            <div
              key={brand._id}
              className="card h-[500px] mx-5 bg-base-300 shadow-xl mb-4 dark:bg-[#0e0c14] dark:text-[#c5c3c9]">
              <figure className="relative">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-[300px] object-top object-cover dark:opacity-30 dark:hover:opacity-80 transition-all duration-300"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold mb-2">
                  {brand.name}
                </h2>
                <p className="text-lg font-bold mb-2 text-green-400">
                  Price: ${brand.price}
                </p>
                <div className="card-actions flex justify-between items-center">
                  <div className="gap-5 flex items-center">
                    <div className="badge badge-outline text-sm">
                      {brand.category}
                    </div>
                    <div className="badge badge-outline text-sm">
                      {brand.rating}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/product/${brand._id}`}
                      className="btn btn-outline btn-sm dark:text-[#c5c3c9]">
                      <FaEye /> View Details
                    </Link>
                    <Link
                      to={`/update/${brand?._id}`}
                      className="btn btn-outline btn-sm dark:text-[#c5c3c9]">
                      <FaEdit /> Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="justify-center flex-col flex items-center my-12 mt-20">
          <img src="https://i.ibb.co/k3BDK3p/no-product.png" alt="" />
          <h1 className="text-4xl my-9 font-semibold dark:text-white ">
            Oops! No Products Found
          </h1>
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Go To Home
          </Link>
        </div>
      )}
    </section>
  );
};

export default BrandDetail;
