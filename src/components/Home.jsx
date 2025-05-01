import React from "react";

function Home() {
  return (
    <>
      <div
        className="p-4 bg-cover mb-4 bg-center rounded-lg shadow-md)"
        style={{ backgroundImage: `url(/heroHome.jpg)` }}
      >
        <div className=" bg-opacity-60 p-6 rounded-lg text-white bg">
          <h2 className="text-5xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="text-lg mb-6">
            Discover luxury properties in prime locations.
          </p>
          <a href="#Properties"> <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 cursor-pointer rounded-lg mb-4">
            Explore Now
          </button></a>

        </div>
      </div>

    </>
  );
}

export default Home;
