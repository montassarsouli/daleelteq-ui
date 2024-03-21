import React from "react";
import Navbar from "./Components/Head/Navbar";
import TeamSection from "./Components/TeamSection";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        <Body />
        <ContactUs />
        <TeamSection />
        <Footer />
      </Routes>
    </>
  );
}
export default App;
/*
 <Body />
*/
