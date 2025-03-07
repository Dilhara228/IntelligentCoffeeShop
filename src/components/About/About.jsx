import React from "react";
import CoffeeShop from "../../assets/CoffeeShop.webp"; 

const About = () => {
  return (
    <div id="about" className="bg-[#f3e5d8] py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
        {/* Image Section */}
        <div data-aos="fade-right" className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <img
            src={CoffeeShop}
            alt="Aroma Coffee Shop Interior"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left" className="w-full lg:w-3/5 text-center lg:text-left">
          <h1 className="text-5xl font-bold font-cursive text-brown-800 mb-8">
            Experience the Aroma of Perfection
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong>Aroma Coffee Shop</strong>, a cozy haven for coffee lovers. 
            Here, every cup tells a story—crafted with passion, brewed to perfection, 
            and served with warmth. Whether you're savoring a bold espresso or indulging 
            in a creamy latte, our coffee is made from the finest handpicked beans to 
            ensure an unforgettable experience.
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Our inviting ambiance, filled with the rich aroma of freshly brewed coffee, 
            is the perfect escape from the daily hustle. Relax, unwind, and let every sip 
            transport you to a world of flavor and comfort. ☕✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
