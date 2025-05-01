import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import PropertyList from "./components/PropertyList";
import PropertyCard from "./components/PropertyCard";
import Contact from "./components/Contact";
import { Route, Router, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

const Allcontainer = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col mx-2 ">
        <div className="border-b-2 border-gray-300">
          <Navbar />
        </div>
        <main className="flex-grow border-b-2 border-gray-300 p-4">
          <Home />
        </main>
        <h1 id="Properties" className="sm:text-3xl text-2xl px-4 py-2 font-bold m-2">
          Highlighted Properties
        </h1>
        <PropertyCard />
        <h1
          id="buy"
          className="sm:text-6xl text-4xl px-4 py-2 font-bold h-40 bg-blue-400 text-center text-white pt-10 rounded-xl m-2 "
        >
          Buy Property: Nepal
        </h1>
        <PropertyCard />
        <h1
          id="rent"
          className="sm:text-6xl text-4xl  px-4 py-2 font-bold h-40 bg-blue-400 text-center text-white pt-10 rounded-xl m-2 "
        >
          Rent Property: Nepal
        </h1>
        <PropertyCard />
        <h1
          id="contact"
          className="sm:text-6xl text-4xl px-4 py-2 font-bold sm:h-40 h-30 bg-blue-400 text-center text-white pt-10 rounded-xl m-2 "
        >
          Contact Us at
        </h1>
        <Contact />
        <div className="border-t-2 my-2 border-gray-300">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Allcontainer;
