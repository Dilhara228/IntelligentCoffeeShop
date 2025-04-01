import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import EspressoImg from "../../assets/Espresso.png";
import CroissantImg from "../../assets/Croissant.png";
import SandwichImg from "../../assets/Sandwich.png";
import CookieImg from "../../assets/Cookie.png";
import CappuccinoImg from "../../assets/Cappuccino.png";
import MuffinImg from "../../assets/Muffin.png";
import AvocadoToastImg from "../../assets/AvocadoToast.png";
import ProteinShakeImg from "../../assets/ProteinShake.png";

const selectedItems = [
  { name: "Espresso", price: "LKR 950", img: EspressoImg },
  { name: "Croissant", price: "LKR 650", img: CroissantImg },
  { name: "Chicken Sandwich", price: "LKR 1,500", img: SandwichImg },
  { name: "Chocolate Chip Cookie", price: "LKR 450", img: CookieImg },

  { name: "Cappuccino", price: "LKR 1,200", img: CappuccinoImg },
  { name: "Blueberry Muffin", price: "LKR 700", img: MuffinImg },
  { name: "Avocado Toast", price: "LKR 950", img: AvocadoToastImg },
  { name: "Protein Shake", price: "LKR 950", img: ProteinShakeImg },
];

const Menu = () => {
  const navigate = useNavigate(); // ✅ Placed at the top of the component

  return (
    <div id="menu" className="container mx-auto py-10 px-5 relative">
      <h1 data-aos="fade-up" className="text-center text-4xl font-bold font-cursive">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {selectedItems.map((item, index) => (
          <div key={index} className="bg-white p-5 shadow-lg rounded-lg text-center">
            <img src={item.img} alt={item.name} className="w-24 h-24 mx-auto rounded-md mb-3" />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-lg text-gray-600 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-8">
        <button
          className="bg-brown-600 text-white px-6 py-2 rounded-full hover:bg-brown-700 transition"
          onClick={() => navigate("/menu")} // ✅ Corrected navigation
        >
          See More
        </button>
      </div>

      {/* Clickable "See More" Arrow Button */}
      <button
        className="absolute bottom-4 right-4 animate-bounce flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition"
        onClick={() => navigate("/menu")} // ✅ Navigate to MenuPage
      >
        <span className="text-black font-semibold">See More</span>
        <FaArrowRight className="text-black text-2xl" />
      </button>
    </div>
  );
};

export default Menu;
