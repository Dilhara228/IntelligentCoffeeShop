import React, { useState } from "react";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import food images
import Espresso from "../../assets/Espresso.png";
import Cappuccino from "../../assets/Cappuccino.png";
import Latte from "../../assets/Latte.png";
import Mocha from "../../assets/Mocha.png";
import Americano from "../../assets/Americano.png";
import Macchiato from "../../assets/Macchiato.png";

import Croissant from "../../assets/Croissant.png";
import Sandwich from "../../assets/Sandwich.png";
import Bagel from "../../assets/Bagel.png";
import Toast from "../../assets/Toast.png";
import Danish from "../../assets/Danish.png";

import Cookie from "../../assets/Cookie.png";
import Muffin from "../../assets/Muffin.png";
import Brownie from "../../assets/Brownie.png";
import Cheesecake from "../../assets/Cheesecake.png";
import Tiramisu from "../../assets/Tiramisu.png";
import Donut from "../../assets/Donut.png";

// Categorized menu items
const menuCategories = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "LKR 950", img: Espresso },
      { name: "Cappuccino", price: "LKR 1,200", img: Cappuccino },
      { name: "Latte", price: "LKR 1,100", img: Latte },
      { name: "Mocha", price: "LKR 1,300", img: Mocha },
      { name: "Americano", price: "LKR 1,000", img: Americano },
      { name: "Macchiato", price: "LKR 1,250", img: Macchiato },
    ],
  },
  {
    category: "Bakery",
    items: [
      { name: "Croissant", price: "LKR 650", img: Croissant},
      { name: "Chicken Sandwich", price: "LKR 1,500", img: Sandwich },
      { name: "Bagel with Cream Cheese", price: "LKR 800", img: Bagel },
      { name: "Toast with Jam & Butter", price: "LKR 500", img: Toast },
      { name: "Danish Pastry", price: "LKR 750", img: Danish },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Chip Cookie", price: "LKR 450", img: Cookie },
      { name: "Blueberry Muffin", price: "LKR 700", img: Muffin },
      { name: "Chocolate Brownie", price: "LKR 900", img: Brownie },
      { name: "Classic Cheesecake", price: "LKR 1,200", img: Cheesecake },
      { name: "Tiramisu", price: "LKR 1,300", img: Tiramisu },
      { name: "Glazed Donut", price: "LKR 600", img: Donut },
    ],
  },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart! 🛒`);
  };

  return (
    <div className="bg-[#fdf3e7] min-h-screen py-10 px-5">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 bg-yellow-500 px-5 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="text-black text-2xl" />
        <span className="text-black font-semibold">Back to Home</span>
      </button>

      {/* Heading */}
      <h1 className="text-center text-5xl font-bold font-cursive text-brown-700 my-10">
        ☕ Our Delicious Menu
      </h1>

      {/* Cart Indicator */}
      <div className="fixed top-5 right-5 flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-full shadow-md">
        <FaShoppingCart className="text-black text-xl" />
        <span className="text-black font-semibold">{cart.length} items</span>
      </div>

      {/* Menu Categories */}
      {menuCategories.map((category, index) => (
        <div key={index} className="mb-16">
          {/* Category Title */}
          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-brown-800 bg-yellow-400 inline-block px-6 py-2 rounded-full shadow-md">
              {category.category}
            </h2>
          </div>

          {/* Category Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-xl rounded-lg text-center transform hover:scale-105 transition duration-300"
              >
                <img src={item.img} alt={item.name} className="w-28 h-28 mx-auto rounded-md mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-lg text-gray-600 font-semibold mt-2">{item.price}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
