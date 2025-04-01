import React, { useState } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

// Menu links
const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Menu", link: "/#menu" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Services", link: "/#services" },
  { id: 5, name: "Reviews", link: "/#reviews" },
  { id: 6, name: "Reservation", link: "/#reservation" },
  { id: 7, name: "Contact", link: "/#footer" },
];

const Navbar = ({ setShowLogin, setShowRegister }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Aroma Coffee Cafe
              </a>
            </div>

            {/* Navigation Links */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex items-center gap-6"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Right-side Icons */}
              <div className="flex items-center gap-5 text-white text-xl">
                <FaSearch className="cursor-pointer hover:text-yellow-400" />
                <FaUser
                  className="cursor-pointer hover:text-yellow-400"
                  onClick={() => {
                    setShowLogin(true);
                    setShowRegister(false); // Make sure Register is closed
                  }}
                />
                <FaShoppingBag className="cursor-pointer hover:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
