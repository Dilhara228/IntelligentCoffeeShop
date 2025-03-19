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
    title: "Reservation",
    link: "/#reservation",
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
    <div id="footer" style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-6"> {/* Increased padding */}
            <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Aroma Coffee Cafe
            </a>
            <p className="pt-6 text-lg space-y-4"> {/* Increased padding-top and text size */}
              Step into Aroma Coffee Cafe, where every sip is a masterpiece.
              Enjoy handcrafted coffee, a warm ambiance, and moments that linger.
              Your perfect espresso escape awaits!
            </p>
          </div>

          {/* Footer links and Opening Hours section */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Quick Links */}
            <div className="py-8 px-6"> {/* Increased padding */}
              <h1 className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive mb-6"> {/* Increased margin-bottom */}
                Quick Links
              </h1>
              <ul className="pt-2 text-lg space-y-4"> {/* Increased spacing between links */}
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="inline-block hover:scale-105 duration-200">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="py-8 px-6"> {/* Increased padding */}
              <h2 className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive mb-6"> {/* Increased margin-bottom */}
                Opening Hours
              </h2>
              <div className="pt-2 text-lg space-y-4"> {/* Increased spacing between time slots */}
                <p>9AM - 2PM</p>
                <p>5PM - 10PM</p>
                <p>Wednesday - Monday</p>
                <p>Closed on Tuesdays</p>
              </div>
            </div>

            {/* Company Address */}
            <div className="py-8 px-6 col-span-2 sm:col-auto"> {/* Increased padding */}
              <h1 className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive mb-6"> {/* Increased margin-bottom */}
                Address
              </h1>
              <div className="pt-2 text-lg space-y-4"> {/* Increased spacing between address lines */}
                <p>88 Staple St, Colombo 03, Sri Lanka</p>
                <p>+94 754590989</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-5 mt-8"> {/* Increased gap between icons */}
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
