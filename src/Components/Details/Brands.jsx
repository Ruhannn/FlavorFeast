// BrandDetail.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const BrandDetail = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brand.json"); // Adjust the endpoint accordingly
        const data = await response.json();
        const selectedBrand = data.find((brand) => brand.id === parseInt(id, 10));
        setBrand(selectedBrand);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!brand) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Carousel></Carousel>
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="hover:filter brightness-100 contrast-100 saturate-100 transition duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-2">{brand.brandName}</h2>
        <img
          className="w-full h-80 object-cover rounded-md mb-4"
          src={brand.image}
          alt={brand.brandName}
        />
      </div>
    </div>
    </>
  );
};

export default BrandDetail;
