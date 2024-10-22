import { useState } from "react"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar"; // Import your Navbar component
import Footer from "./shared/Footer";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    phoneNumber: "",
    email: "",
    passport: "",
    bloodGroup: "",
    dob: "",
    gender: "",
    userType: "person", // Default user type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending form data to the backend
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        alert("Signup successful!");
      } else {
        console.error("Error submitting form:", result);
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Include Navbar here */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} // Start with scale effect
        animate={{ opacity: 1, scale: 1 }} // Animate to full size
        transition={{ duration: 0.5 }} // Smooth transition
        className="flex justify-center items-center min-h-screen mt-32 "
      >
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
          initial={{ y: -20 }} // Start slightly above
          animate={{ y: 0 }} // Animate to its original position
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Blood Bank Sign Up
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* User Type */}
            <motion.div className="col-span-2 mb-4">
              <label className="block text-sm font-medium mb-2">
                User Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="person"
                    checked={formData.userType === "person"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Person
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="hospital"
                    checked={formData.userType === "hospital"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Hospital
                </label>
              </div>
            </motion.div>

            {/* Full Name */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Date of Birth */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Address */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Country */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* State */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="state">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* District */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="district">
                District
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Pincode */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="pincode">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>

            {/* Password */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="passport">
                Password
              </label>
              <input
                type="text"
                name="passport"
                value={formData.passport}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>

            {/* Blood Group */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="bloodGroup">
                Blood Group
              </label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full mt-4 hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
          <div className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
          </div>
        </motion.form>
      </motion.div>
      <Footer /> {/* Include Footer here */}
    </div>
  );
}
