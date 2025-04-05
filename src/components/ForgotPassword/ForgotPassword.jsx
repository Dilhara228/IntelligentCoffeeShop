import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const ForgotPassword = ({ setShowForgotPassword, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: newPassword }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Reset failed");

      setMessage("✅ Password updated successfully!");
      setTimeout(() => {
        setShowForgotPassword(false);
        setShowLogin(true);
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <div className="bg-brandDark text-white rounded-3xl w-full max-w-md shadow-lg relative p-10">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={() => setShowForgotPassword(false)}
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center mb-4">
          🔐 Reset Your Password
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Enter your email and new password to continue
        </p>

        {message && <p className="text-green-500 text-center mb-3">{message}</p>}
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-[#f3e5d8] text-black rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Reset Password
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
  );
};

export default ForgotPassword;
