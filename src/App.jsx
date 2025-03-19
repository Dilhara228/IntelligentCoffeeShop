import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./Pages/Register/Register";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import MenuPage from "./Pages/MenuPage/MenuPage"; 
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // Login appears first

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });

    // Check if user is already logged in (stored token)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setShowLogin(false); // Hide login form if already logged in
    }
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        {/* Show Login Form First */}
        {showLogin ? (
          <Login setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} />
        ) : (
          <>
            <Navbar />
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Menu />
                    <About />
                    <Services />
                    <Reviews />
                    <Reservation />
                    <Footer />
                  </>
                }
              />
              {/* Menu Page */}
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
