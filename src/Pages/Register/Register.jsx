import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import CoffeeImage from "../../assets/coffee-image.jpg";

const Register = ({ setShowRegister, setShowLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    const { firstName, lastName, email, password, address, phone } = formData;

    if (!/^[A-Za-z]{2,}$/.test(firstName)) {
      return "First name must contain at least 2 letters.";
    }

    if (!/^[A-Za-z]{2,}$/.test(lastName)) {
      return "Last name must contain at least 2 letters.";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return "Invalid email format.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    if (address.trim().length < 5) {
      return "Address must be at least 5 characters long.";
    }

    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be exactly 10 digits.";
    }

    return null;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Registration failed");

      alert("🎉 Registration Successful! Please login.");
      setShowRegister(false);
      setShowLogin(true);
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
          onClick={() => setShowRegister(false)}
        >
          <FaTimes />
        </button>

        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src={CoffeeImage}
            alt="Coffee Beans"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            ☕ Aroma Coffee Cafe
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Create your account to continue
          </p>

          {error && <p className="text-red-500 text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-1/2 px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300 mt-2"
            >
              Register
            </button>
          </form>

          {/* Link to Login */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <span
                className="text-yellow-500 font-semibold hover:underline cursor-pointer"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
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

export default Register;
