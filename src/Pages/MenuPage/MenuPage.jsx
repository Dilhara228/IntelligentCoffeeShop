import React, { useState } from "react";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaTimes,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Regular food images
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

// Healthy images
import AvocadoToast from "../../assets/AvocadoToast.png";
import QuinoaSalad from "../../assets/QuinoaSalad.png";
import VegWrap from "../../assets/VegWrap.png";
import SmoothieBowl from "../../assets/SmoothieBowl.png";
import OatmealBerries from "../../assets/OatmealBerries.png";
import ChiaPudding from "../../assets/ChiaPudding.png";

// Drinks & Bites
import GreenSmoothie from "../../assets/GreenSmoothie.png";
import FruitJuice from "../../assets/FruitJuice.png";
import ProteinShake from "../../assets/ProteinShake.png";
import DetoxWater from "../../assets/DetoxWater.png";

import BoiledEggs from "../../assets/BoiledEggs.png";
import NutsMix from "../../assets/NutsMix.png";
import GreekYogurt from "../../assets/GreekYogurt.png";
import HummusVeggies from "../../assets/HummusVeggies.png";

const getPriceValue = (priceStr) =>
  parseInt(priceStr.replace("LKR", "").replace(",", "").trim());

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
      { name: "Croissant", price: "LKR 650", img: Croissant },
      { name: "Chicken Sandwich", price: "LKR 1,500", img: Sandwich },
      { name: "Bagel with Cream Cheese", price: "LKR 800", img: Bagel },
      { name: "Toast with Jam & Butter", price: "LKR 500", img: Toast },
      { name: "Danish Pastry", price: "LKR 750", img: Danish },
      { name: "Avocado Toast", price: "LKR 950", img: AvocadoToast },
      { name: "Veggie Wrap (Whole Wheat)", price: "LKR 1,100", img: VegWrap },
      { name: "Oatmeal with Berries & Nuts", price: "LKR 850", img: OatmealBerries },
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
      { name: "Quinoa Salad", price: "LKR 1,200", img: QuinoaSalad },
      { name: "Smoothie Bowl (Mixed Berries)", price: "LKR 900", img: SmoothieBowl },
      { name: "Chia Pudding (Coconut Milk)", price: "LKR 700", img: ChiaPudding },
    ],
  },
  {
    category: "Smoothies & Juices",
    items: [
      { name: "Green Smoothie", price: "LKR 800", img: GreenSmoothie },
      { name: "Fresh Fruit Juice", price: "LKR 750", img: FruitJuice },
      { name: "Protein Shake", price: "LKR 950", img: ProteinShake },
      { name: "Detox Water", price: "LKR 600", img: DetoxWater },
    ],
  },
  {
    category: "Light Bites",
    items: [
      { name: "Boiled Eggs (2 pcs)", price: "LKR 500", img: BoiledEggs },
      { name: "Mixed Nuts Cup", price: "LKR 400", img: NutsMix },
      { name: "Greek Yogurt Cup", price: "LKR 600", img: GreekYogurt },
      { name: "Hummus & Veggie Sticks", price: "LKR 700", img: HummusVeggies },
    ],
  },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    const exists = cart.find((i) => i.name === item.name);
    if (exists) {
      setCart(cart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increment = (name) => {
    setCart(cart.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (name) => {
    setCart(cart
      .map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0));
  };

  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + getPriceValue(item.price) * item.quantity,
      0
    );
  };

  return (
    <div className="bg-[#fdf3e7] min-h-screen py-10 px-5 relative">
      {/* Header */}
      <button
        className="flex items-center gap-2 bg-yellow-500 px-5 py-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="text-black text-2xl" />
        <span className="text-black font-semibold">Back to Home</span>
      </button>

      <h1 className="text-center text-5xl font-bold font-cursive text-brown-700 my-10">
        ☕ Our Delicious Menu
      </h1>

      {/* Cart Button */}
      <div
        className="fixed top-5 right-5 flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-full shadow-md cursor-pointer hover:bg-yellow-600"
        onClick={() => setShowCart(!showCart)}
      >
        <FaShoppingCart className="text-black text-xl" />
        <span className="text-black font-semibold">{cart.length} items</span>
      </div>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🛒 Your Cart</h2>
            <button onClick={() => setShowCart(false)} className="text-red-500 text-xl">
              <FaTimes />
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        LKR {getPriceValue(item.price) * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decrement(item.name)} className="bg-gray-200 px-2 rounded">
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increment(item.name)} className="bg-gray-200 px-2 rounded">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>LKR {getTotal().toLocaleString()}</span>
              </div>
              <button className="mt-6 w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
                Checkout
              </button>
            </>
          )}
        </div>
      )}

      {/* Menu Render */}
      {menuCategories.map((category, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-800 bg-yellow-400 inline-block px-6 py-2 rounded-full shadow-md text-center">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-xl rounded-lg text-center transform hover:scale-105 transition duration-300"
              >
                <img src={item.img} alt={item.name} className="w-28 h-28 mx-auto rounded-md mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-lg text-gray-600 font-semibold mt-2">{item.price}</p>
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
