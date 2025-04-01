import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CoffeeImage from "../../assets/coffee-image.jpg";

const ForgotPassword = ({ setShowForgotPassword, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Request failed");

      setMessage("✅ Reset link sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <div className="flex bg-brandDark text-white rounded-3xl overflow-hidden w-[850px] shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={() => setShowForgotPassword(false)}
        >
          <FaTimes />
        </button>

        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={CoffeeImage}
            alt="Coffee Beans"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            ☕ Aroma Coffee Cafe
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Enter your email to reset your password
          </p>

          {message && <p className="text-green-500 text-center mb-3">{message}</p>}
          {error && <p className="text-red-500 text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-[#f3e5d8] rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Back to{" "}
              <span
                onClick={() => {
                  setShowForgotPassword(false);
                  setShowLogin(true);
                }}
                className="text-yellow-500 font-semibold hover:underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
