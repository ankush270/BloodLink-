import React, { useState } from 'react';
import { FaTint, FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';

const RequestBlood = () => {
  const [bloodType, setBloodType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [units, setUnits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bloodType, urgency, units });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 text-center">
        <FaTint className="inline-block mr-2" /> Request Blood
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaTint className="inline-block mr-1" /> Blood Type
          </label>
          <input 
            type="text" 
            value={bloodType} 
            onChange={(e) => setBloodType(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaExclamationTriangle className="inline-block mr-1" /> Urgency
          </label>
          <input 
            type="text" 
            value={urgency} 
            onChange={(e) => setUrgency(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            <FaClipboardCheck className="inline-block mr-1" /> Number of Units
          </label>
          <input 
            type="number" 
            value={units} 
            onChange={(e) => setUnits(e.target.value)} 
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Request Blood
        </button>
      </form>
    </div>
  );
};

export default RequestBlood;
