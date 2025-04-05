import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import CoffeeImage from "../../assets/coffee-image.jpg";

const Login = ({
  setIsLoggedIn,
  setShowLogin,
  setShowRegister,
  setShowForgotPassword,
  setShowFaceLogin,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      setShowLogin(false);
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
          onClick={() => setShowLogin(false)}
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

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            ☕ Aroma Coffee Cafe
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Welcome Back, Please login to your account
          </p>

          {error && <p className="text-red-500 text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-[#f3e5d8] rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#f3e5d8] rounded-lg border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-yellow-500" />
                <span>Remember me</span>
              </label>
              <span
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => {
                  setShowLogin(false);
                  setShowForgotPassword(true);
                }}
              >
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300 mt-6"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setShowLogin(false);
                setShowFaceLogin(true); // 👈 Open face recognition modal
              }}
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300 mt-4"
            >
              Face Recognition Login
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <span
                className="text-yellow-500 font-semibold hover:underline cursor-pointer"
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
