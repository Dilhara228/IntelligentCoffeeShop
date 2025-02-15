import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Menu",
    link: "/#menu",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Aroma Coffee Cafe
            </a>
            <p className="pt-4">
              Step into Aroma Coffee Cafe, where every sip is a masterpiece.
              Enjoy handcrafted coffee, a warm ambiance, and moments that linger.
              Your perfect espresso escape awaits!
            </p>
          </div>

          {/* Footer links and Opening Hours section */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="py-8 px-4">
              <h2
                className="text-xl font-semibold sm:text-left mb-3"
                style={{ fontSize: "1.25rem", fontFamily: "Arial, sans-serif" }}
              >
                Opening Hours
              </h2>
              <div>
                <p
                  className="mb-3"
                  style={{ fontSize: "1rem", fontFamily: "Arial, sans-serif" }}
                >
                  9AM - 2PM
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  5PM - 10PM
                </p>
                <p
                className="mb-3 mt-3"
                  style={{
                  fontSize: "1rem",
                  fontFamily: "Arial, sans-serif",
               }}
               >
                  Wednesday - Monday
               </p>
               <p
                  className="mb-3 mt-3"
                  style={{
                  fontSize: "1rem",
                  fontFamily: "Arial, sans-serif",
              }}
              >
                  Closed on Tuesdays
              </p>

              </div>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1
                className="text-xl font-semibold sm:text-left mb-3"
                style={{ fontSize: "1.25rem", fontFamily: "Arial, sans-serif" }}
              >
                Address
              </h1>
              <div>
                <p
                  className="mb-3"
                  style={{ fontSize: "1rem", fontFamily: "Arial, sans-serif" }}
                >
                  88 Staple St, Colombo 03, Sri Lanka
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  +94 754590989
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-200" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
