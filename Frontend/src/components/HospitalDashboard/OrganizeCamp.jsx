import React, { useState } from 'react';
import { FaCampground, FaRegCalendarAlt, FaClock, FaMapMarkerAlt, FaStickyNote } from 'react-icons/fa';

const OrganizeCamp = () => {
  const [campName, setCampName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ campName, date, time, location, notes });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
        <FaCampground className="inline-block mr-2" /> Organize Blood Camp
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Camp Name</label>
          <input 
            type="text" 
            value={campName} 
            onChange={(e) => setCampName(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaRegCalendarAlt className="inline-block mr-1" /> Date
          </label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaClock className="inline-block mr-1" /> Time
          </label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaMapMarkerAlt className="inline-block mr-1" /> Location
          </label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaStickyNote className="inline-block mr-1" /> Notes
          </label>
          <textarea 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows="3" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Organize Camp
        </button>
      </form>
    </div>
  );
};

export default OrganizeCamp;
