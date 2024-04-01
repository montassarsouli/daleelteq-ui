import React from "react";
import Navbar from "./Components/Head/Navbar";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
import { Routes, Route } from "react-router-dom";
import ScrollTopButton from "./Components/ScrollTopButton";
import Test from "./Components/Test";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
      <ScrollTopButton />
    </>
  );
}
export default App;
/*
      <Routes>
        <Route path="/" element={} />
        <Route path="/" element={} />
        <Route path="/ContactUs" element={} />
        <Route path="/" element={} />
        <Route path="/" element={} />
      </Routes>
*/
