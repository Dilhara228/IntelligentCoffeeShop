import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    people: "",
    date: "",
  });
  const [mobileError, setMobileError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      if (!/^[0-9]*$/.test(value)) return;
      if (value.length > 10) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      setMobileError("Mobile number must be exactly 10 digits.");
      return;
    }
    setMobileError("");
    console.log("Form Data Submitted:", formData);
    alert("Your reservation has been sent!");
    setFormData({ name: "", mobile: "", people: "", date: "" });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="bg-primary/10 py-12 px-4">
      <h1 className="text-4xl font-bold font-cursive text-center mb-8" data-aos="fade-up">
        Reserve a Table
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl"
        data-aos="fade-up"
      >
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-black/80 font-medium text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label htmlFor="mobile" className="block text-black/80 font-medium text-lg mb-2">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your mobile number"
            required
          />
          {mobileError && <p className="text-red-500 text-sm mt-2">{mobileError}</p>}
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <label htmlFor="people" className="block text-black/80 font-medium text-lg mb-2">
            Number of People
          </label>
          <select
            id="people"
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
            required
          >
            <option value="" disabled>
              Select number of people
            </option>
            {[...Array(8).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{`${num + 1} Person${num > 0 ? "s" : ""}`}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-black/80 font-medium text-lg mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
            min={getCurrentDate()}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition duration-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Reservation;
