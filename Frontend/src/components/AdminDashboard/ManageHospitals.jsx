import React, { useState } from 'react';
import { motion } from 'framer-motion';


const ManageHospitals = () => {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: 'City Hospital', location: 'Downtown', contact: '1234567890', established: '2005', services: 'Emergency, Surgery, Pediatrics' },
    { id: 2, name: 'General Hospital', location: 'Uptown', contact: '0987654321', established: '2010', services: 'General Medicine, Cardiology, Neurology' },
  ]);

  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', location: '', contact: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    setHospitals(hospitals.filter(hospital => hospital.id !== id));
  };

  const handleEditClick = (hospital) => {
    setSelectedHospital(hospital);
    setFormData({ name: hospital.name, location: hospital.location, contact: hospital.contact });
    setIsEditModalOpen(true);
  };

  const handleViewDetailsClick = (hospital) => {
    setSelectedHospital(hospital);
    setIsDetailsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setHospitals(hospitals.map(hospital => 
      hospital.id === selectedHospital.id ? { ...hospital, ...formData } : hospital
    ));
    setIsEditModalOpen(false);
    setSelectedHospital(null);
  };

  const handleAddHospital = () => {
    const newHospital = {
      id: hospitals.length + 1,
      ...formData,
      established: '2024',
      services: 'General Services',
    };
    setHospitals([...hospitals, newHospital]);
    setIsAddModalOpen(false);
    setFormData({ name: '', location: '', contact: '' });
  };

  const isFormValid = formData.name && formData.location && formData.contact;

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 mt-16 bg-gradient-to-r from-red-500 to-red-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Hospitals</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Hospital Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredHospitals.map(hospital => (
          <motion.div 
          key={hospital.id} 
          className="hospital-card bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-4 shadow-md"
          whileHover={{ scale: 1.05 }} // Scale on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <h3 className="text-lg font-semibold">{hospital.name}</h3>
            <p><strong>Location:</strong> {hospital.location}</p>
            <p><strong>Contact:</strong> {hospital.contact}</p>
            <div className="mt-4">
              <button 
                onClick={() => handleViewDetailsClick(hospital)} 
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200 mr-2"
              >
                View Details
              </button>
              <button 
                onClick={() => handleEditClick(hospital)} 
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-200 mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(hospital.id)} 
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button 
        onClick={() => setIsAddModalOpen(true)} 
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
      >
        Add New Hospital
      </button>

      {/* Add Hospital Modal */}
      {isAddModalOpen && (
        <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-96" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <h3 className="text-lg font-bold mb-4">Add New Hospital</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-end">
              <button 
                onClick={handleAddHospital} 
                className={`py-1 px-3 rounded ${isFormValid ? 'bg-green-500 text-white hover:bg-green-600 transition duration-200' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Add
              </button>
              <button 
                onClick={() => setIsAddModalOpen(false)} 
                className="bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-400 transition duration-200 ml-2"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-96" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <h3 className="text-lg font-bold mb-4">Edit Hospital Details</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-end">
              <button 
                onClick={handleSave} 
                className={`py-1 px-3 rounded ${isFormValid ? 'bg-green-500 text-white hover:bg-green-600 transition duration-200' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Save
              </button>
              <button 
                onClick={() => setIsEditModalOpen(false)} 
                className="bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-400 transition duration-200 ml-2"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedHospital && (
        <motion.div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-96" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <h3 className="text-lg font-bold mb-4">Hospital Details</h3>
            <p><strong>Name:</strong> {selectedHospital.name}</p>
            <p><strong>Location:</strong> {selectedHospital.location}</p>
            <p><strong>Contact:</strong> {selectedHospital.contact}</p>
            <p><strong>Established:</strong> {selectedHospital.established}</p>
            <p><strong>Services:</strong> {selectedHospital.services}</p>
            <div className="flex justify-end mt-4">
              <button 
                onClick={() => setIsDetailsModalOpen(false)} 
                className="bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-400 transition duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ManageHospitals;
