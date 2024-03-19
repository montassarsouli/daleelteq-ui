import React from "react";
import Navbar from "./Components/Head/Navbar";
import TeamSection from "./Components/TeamSection";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
import CallToAction from "./Components/Body/CallToAction";

function App() {
  return (
    <>
      <Navbar />
      <CallToAction />
      <ContactUs />
      <TeamSection />
      <Footer />
    </>
  );
}
export default App;
/*
 <Body />
*/
