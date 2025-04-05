import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./Pages/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"; // ✅ Import face login

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
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showFaceLogin, setShowFaceLogin] = useState(false); // ✅ New state for face login

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        {/* === Global Modals === */}
        {showLogin && (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
            setShowForgotPassword={setShowForgotPassword}
            setShowFaceLogin={setShowFaceLogin} // ✅ Pass face login handler
          />
        )}
        {showRegister && (
          <Register
            setShowRegister={setShowRegister}
            setShowLogin={setShowLogin}
          />
        )}
        {showForgotPassword && (
          <ForgotPassword
            setShowForgotPassword={setShowForgotPassword}
            setShowLogin={setShowLogin}
          />
        )}
        {showFaceLogin && (
          <FaceRecognition
            setShowFaceLogin={setShowFaceLogin}
            setShowLogin={setShowLogin}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}

        {/* === Main content (hidden when modal is open) === */}
        {!showLogin && !showRegister && !showForgotPassword && !showFaceLogin && (
          <>
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
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
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
