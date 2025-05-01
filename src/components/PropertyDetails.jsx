

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PropertyDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const { image, title, price, location, discription } = state;

  return (
    <div className='bg-indigo-400 sm:h-[100vh] h-[140vh]'>
      <div className="sm:flex h-[100vh] items-center justify-between w-[98vw]">
        <div className="left_col sm:w-[48%] w-full sm:m-2 p-2 h-[40%] sm:h-[90%]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="right_col bg-indigo-300 p-2 sm:w-[48%] w-full overflow-auto border-2 mx-1 h-[90%] rounded overflow-y-auto">
          <h1 className="text-4xl font-bold p-1">Property Details</h1>
          <h3 className="text-3xl underline my-3 font-semibold">{title}</h3>
          <p className="text-xl font-semibold">Location: {location}</p>
          <p className="text-xl font-semibold">Price: {price}</p>
          <div className="text-lg mt-2 whitespace-pre-line">
            {discription && discription.trim() !== "" ? (
              discription
            ) : (
              <span className="italic text-gray-500">
                No description available.
              </span>
            )}
            <div className="my-5 flex justify-end">
            <button className="bg-amber-100 px-3 py-2 font-semibold text-xl rounded-2xl cursor-pointer hover:bg-indigo-400 hover:font-bold">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
