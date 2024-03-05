import React from "react";
import CallToAction from "./Components/CallToAction";
import Navbar from "./Components/Navbar";
import TeamSection from "./Components/TeamSection";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Pagination from "./Components/body/Pagination";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <CallToAction />
        <Pagination />
        <TeamSection />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
export default App;
