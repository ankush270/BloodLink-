import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'; // Existing imports
import { GiBlood } from 'react-icons/gi'; // Use GiBlood for blood group

const Profile = () => {
  const [name, setName] = useState('John Doe'); // Example initial value
  const [email, setEmail] = useState('john@example.com'); // Example initial value
  const [contact, setContact] = useState('123-456-7890'); // Example initial value
  const [bloodGroup, setBloodGroup] = useState('O+'); // Example initial value

  const handleUpdateProfile = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle profile update logic here
    console.log('Profile updated:', { name, email, contact, bloodGroup });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Profile Information</h2>
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        <div className="flex items-center">
          <FaUser className="h-6 w-6 text-blue-600 mr-2" />
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 placeholder-gray-400"
          placeholder="Enter your name"
          required
        />
        
        <div className="flex items-center">
          <FaEnvelope className="h-6 w-6 text-blue-600 mr-2" />
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 placeholder-gray-400"
          placeholder="Enter your email"
          required
        />
        
        <div className="flex items-center">
          <FaPhone className="h-6 w-6 text-blue-600 mr-2" />
          <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
        </div>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 placeholder-gray-400"
          placeholder="Enter your contact number"
          required
        />
        
        <div className="flex items-center">
          <GiBlood className="h-6 w-6 text-blue-600 mr-2" />
          <label className="block text-gray-700 font-semibold mb-2">Blood Group</label>
        </div>
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-md hover:shadow-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
