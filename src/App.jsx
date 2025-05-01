import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropertyDetails from "./components/PropertyDetails";
import Allcontainer from "./Allcontainer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Allcontainer/>} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;


