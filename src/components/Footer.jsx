import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-xl text-white p-4 text-center rounded-lg shadow-md ">
      <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
