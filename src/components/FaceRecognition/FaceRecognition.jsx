import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FaceRecognition = ({ setShowFaceLogin, setShowLogin, setIsLoggedIn }) => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleFaceLogin = async () => {
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/face-login");
      const data = await res.json();

      if (data.success && data.email) {
        const loginRes = await fetch("http://localhost:5000/api/auth/face-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email }),
        });

        const loginData = await loginRes.json();

        if (loginRes.ok) {
          localStorage.setItem("token", loginData.token);
          setIsLoggedIn(true);
          setShowFaceLogin(false);
        } else {
          setError(loginData.message || "Login failed");
        }
      } else {
        setError("❌ Face not recognized.");
      }
    } catch (err) {
      setError("Face login failed. Ensure the server is running.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg z-50">
      <div className="bg-brandDark text-white rounded-3xl w-[500px] p-8 relative shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={() => setShowFaceLogin(false)}
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">Face Recognition Login</h2>
        <p className="text-center text-gray-300 mb-4">
          Click the button below to scan your face and log in securely.
        </p>

        {message && <p className="text-green-500 text-center mb-3">{message}</p>}
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <button
          onClick={handleFaceLogin}
          className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Scan Face & Login
        </button>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Back to{" "}
            <span
              onClick={() => {
                setShowFaceLogin(false);
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

export default FaceRecognition;
