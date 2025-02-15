import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner from "./pages/Menu/Menu";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact"; 
import Menu from "./pages/Menu"; 

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/Menu" element={<Menu />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/menu" element={<Menu />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
