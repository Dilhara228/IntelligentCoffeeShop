import React from "react";
import { Link } from "react-router-dom";  
import Logo from "../../assets/website/coffee_logo.png";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive">
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </Link>
          </div>

          {/* Navbar Links */}
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <Link to="/" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Menu</Link>
            </li>
            <li>
              <Link to="/reservation" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Reservation</Link>
            </li>
            <li>
              <Link to="/reviews" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Reviews</Link>
            </li>
            <li>
              <Link to="/about" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl py-4 px-4 text-white/70 hover:text-white duration-200">Contact</Link>
            </li>
            
          </ul>
          {/* Login Button */}
          <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
            Login
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
