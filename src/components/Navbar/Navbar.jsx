import React from "react";
import { useState } from "react"; // ✅ Add state for Login visibility
import Logo from "../../assets/website/coffee_logo.png";
import Login from "../Login/Login"; // ✅ Import Login Component

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Menu", link: "/#menu" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Services", link: "/#services" },
  { id: 5, name: "Reviews", link: "/#reviews" },
  { id: 6, name: "Reservation", link: "/#reservation" },
  { id: 7, name: "Contact", link: "/#footer" },
];

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false); // ✅ State to handle Login form visibility

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Aroma Coffee Cafe
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
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
              {/* Login Button */}
              <button
                className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
                onClick={() => setShowLogin(true)} // ✅ Open Login Form
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Conditionally Render Login Form */}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
};

export default Navbar;
