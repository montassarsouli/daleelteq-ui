import { Suspense } from "react";
import Navbar from "./Components/Head/Navbar";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
import { Routes, Route } from "react-router-dom";
import ScrollTopButton from "./Components/ScrollTopButton";
import Test from "./Components/Test";
import { useTranslation } from "react-i18next";
import Navbar2 from "./Components/Head/navbar2";
/*
import i18n from "i18next";
import { useEffect } from "react";
useEffect(() => {
  document.body.dir = i18n.dir();
}, [i18n, i18n.language]);
*/
function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
        <Body />
        <Footer />
        <ScrollTopButton />
      </Suspense>
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
/*
npm i -S react-i18next i18next 
npm i -S i18next-http-backend i18next-browser-languagedetector
navbar2
*/
