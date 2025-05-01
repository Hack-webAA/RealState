import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-3 mt-1 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">Hamro Ghar</h1>
      <h5 className="font-semi-bold">(Nepal Best Real Estate)</h5>
      <ul className="flex justify-end gap:4 text-xl cursor-pointer">
        <li className="relative group px-2 py-1 transition-all duration-300 hover:text-blue-600">
          <a href="#Properties">Properties</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group px-2 py-1 transition-all duration-300 hover:text-blue-600">
          <a href="#buy">Buy</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group px-2 py-1 transition-all duration-300 hover:text-blue-600">
          <a href="#rent">Rent</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li className="relative group px-2 py-1 transition-all duration-300 hover:text-blue-600">
          <a href="#contact">Contact</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li className="relative group px-2 py-1 transition-all duration-300 hover:text-blue-600">
          <a href="login">Login</a>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
