import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import EspressoImg from "../../assets/Espresso.png";
import CroissantImg from "../../assets/Croissant.png";
import SandwichImg from "../../assets/Sandwich.png";
import CookieImg from "../../assets/Cookie.png";

const selectedItems = [
  { name: "Espresso", price: "LKR 950", img: EspressoImg },
  { name: "Croissant", price: "LKR 650", img: CroissantImg },
  { name: "Chicken Sandwich", price: "LKR 1,500", img: SandwichImg },
  { name: "Chocolate Chip Cookie", price: "LKR 450", img: CookieImg },
];

const Menu = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="menu" className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-brown-700 mb-8">Our Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {selectedItems.map((item, index) => (
          <div key={index} className="bg-white p-5 shadow-lg rounded-lg text-center">
            <img src={item.img} alt={item.name} className="w-24 h-24 mx-auto rounded-md mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-lg text-gray-600 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button
          className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Menu;
