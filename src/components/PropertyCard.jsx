

import React from "react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Luxury Home",
    price: "Rs.8,00,00,000",
    location: "Hattigauda Kathmandu",
    image: "/pro1.png",
    discription: "Discover unparalleled comfort in this beautifully designed luxury home located in the serene neighborhood of Hattigauda, Kathmandu. This premium property offers spacious interiors, modern architecture, and high-end finishes, making it perfect for families seeking both style and functionality. With well-planned living spaces, lush surroundings, and easy access to schools, hospitals, and major roadways, it delivers both elegance and convenience — all at a value of Rs. 8,00,00,000.njgd",
  },
  {
    id: 2,
    title: "Apartment",
    price: "Rs.1,00,00,000",
    location: "Near Pasupatinath",
    image: "/pro2.png",
    discription: "Embrace modern city living with this well-designed apartment located near the sacred Pashupatinath Temple in Kathmandu. Priced at Rs. 1,00,00,000, this property offers a perfect blend of comfort and convenience, with spacious rooms, natural light, and close proximity to temples, hospitals, markets, and public transport. Ideal for individuals or small families seeking peaceful yet connected living in the heart of the city.",
  },
  {
    id: 3,
    title: "Best Land Ever",
    price: "Rs.3,00,00,000",
    location: "Sitapaila",
    image: "/pro3.png",
    discription:
      "🏡  A Rare Opportunity in Sitapaila Welcome to one of the most exclusive and sought-after land offerings in Sitapaila — Best Land Ever. Nestled in a serene and well-developed neighborhood, this premium property is the perfect blend of peaceful surroundings and urban convenience. Whether you're planning to build your dream home or make a secure long-term investment, this land offers limitless potential.Situated in a prime residential area, the property boasts easy access to schools, hospitals, and major roadways. The land is flat, well-fenced, and ideal for residential construction, with water and electricity connections readily available.With a competitive market price of Rs. 3,00,00,000, this plot offers not only exceptional value but also a rare chance to own a piece of Sitapaila — a location known for its rising demand and modern lifestyle appeal.",
  },

  {
    id: 4,
    title: "Apartment",
    price: "Rs.1,00,00,000",
    location: "Near Pasupatinath",
    image: "/pro4.png",
    discription: "Embrace modern city living with this well-designed apartment located near the sacred Pashupatinath Temple in Kathmandu. Priced at Rs. 1,00,00,000, this property offers a perfect blend of comfort and convenience, with spacious rooms, natural light, and close proximity to temples, hospitals, markets, and public transport. Ideal for individuals or small families seeking peaceful yet connected living in the heart of the city.",
  },
  {
    id: 5,
    title: "Best Land Ever",
    price: "Rs.3,00,00,000",
    location: "Sitapaila",
    image: "/pro5.png",
    discription: "Unlock the potential of premium real estate with this exceptional land parcel in the highly sought-after area of Sitapaila. Spanning a prime location ideal for residential development, this property offers a peaceful environment with easy access to major roads, schools, and city amenities. Whether you're building your dream home or making a solid investment, this flat and ready-to-build land is a rare find — available now for Rs. 3,00,00,000.",
  },
];

function PropertyCard() {
  const navigate = useNavigate();

  return (
    <div className="sm:flex sm:justify-between">
      {properties.map((property) => (
        <div
          key={property.id}
          className="border sm:w-[50%] w-full rounded-lg p-4 shadow-lg"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-bold">{property.title}</h3>
          <p>{property.location}</p>
          <p className="text-lg font-semibold">{property.price}</p>
          <button
            className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 mt-2 rounded"
            onClick={() =>
              navigate(`/property/${property.id}`, { state: property })
            }
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default PropertyCard;
