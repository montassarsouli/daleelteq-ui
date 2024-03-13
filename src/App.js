import React from "react";
import CallToAction from "./Components/body/CallToAction";
import Navbar from "./Components/Navbar";
import TeamSection from "./Components/TeamSection";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Pagination from "./Components/body/Pagination";
import Slides from "./Components/body/Slides";
import Stats from "./Components/body/Stats";
import Tayseer from "./Components/body/Tayseer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Tayseer />
        <Slides />
        <Pagination />
        <ContactUs />
        <TeamSection />
        <Footer />
      </div>
    </>
  );
}
export default App;
