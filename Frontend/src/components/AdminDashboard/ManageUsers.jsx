import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', bloodType: 'A+', age: 30, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', bloodType: 'B+', age: 28, address: '456 Elm St' },
  ]);

  const [formData, setFormData] = useState({ name: '', email: '', bloodType: '', age: '', address: '' });
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [nameSearchQuery, setNameSearchQuery] = useState('');
  const [bloodTypeSearchQuery, setBloodTypeSearchQuery] = useState('');

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      ...formData,
    };
    setUsers([...users, newUser]);
    setIsAddModalOpen(false);
    setFormData({ name: '', email: '', bloodType: '', age: '', address: '' });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email, bloodType: user.bloodType, age: user.age, address: user.address });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setUsers(users.map(user => 
      user.id === selectedUser.id ? { ...user, ...formData } : user
    ));
    setIsEditModalOpen(false);
    setSelectedUser(null);
    setFormData({ name: '', email: '', bloodType: '', age: '', address: '' });
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameSearchQuery.toLowerCase()) &&
    user.bloodType.toLowerCase().includes(bloodTypeSearchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-r from-red-500 to-red-300 mt-12  rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Users</h2>

      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        {/* Search Inputs */}
        <input
          type="text"
          placeholder="Search by name"
          value={nameSearchQuery}
          onChange={(e) => setNameSearchQuery(e.target.value)}
          className="block w-full sm:w-1/2 border border-gray-300 rounded-lg shadow-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Search by blood type"
          value={bloodTypeSearchQuery}
          onChange={(e) => setBloodTypeSearchQuery(e.target.value)}
          className="block w-full sm:w-1/2 border border-gray-300 rounded-lg shadow-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredUsers.map(user => (
    <motion.div 
    key={user.id} 
    className="hospital-card bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-4 shadow-md"
    whileHover={{ scale: 1.05 }} // Scale on hover
    transition={{ type: 'spring', stiffness: 300 }}
  >
      <h3 className="text-xl font-semibold mb-2 ">{user.name}</h3>
      <p className=""><strong>Email:</strong> {user.email}</p>
      <p className=""><strong>Blood Type:</strong> {user.bloodType}</p>
      <div className="mt-4">
        <button
          onClick={() => handleViewDetails(user)}
          className="bg-blue-500 text-white py-1 px-4 rounded-md mr-2 hover:bg-blue-600 transition"
        >
          View
        </button>
        <button
          onClick={() => handleEditClick(user)}
          className="bg-yellow-500 text-white py-1 px-4 rounded-md mr-2 hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </motion.div>
  ))}
</div>


      <button
        onClick={() => setIsAddModalOpen(true)}
        className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition block mx-auto"
      >
        Add New User
      </button>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New User</h3>
            {/* Form Fields */}
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
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Blood Type</label>
              <input
                type="text"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddUser}
                disabled={!isFormValid()}
                className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200 ${!isFormValid() && 'opacity-50 cursor-not-allowed'}`}
              >
                Add User
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="ml-4 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit User</h3>
            {/* Form Fields */}
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
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Blood Type</label>
              <input
                type="text"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="ml-4 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View User Modal */}
      {isViewModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">User Details</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Blood Type:</strong> {selectedUser.bloodType}</p>
            <p><strong>Age:</strong> {selectedUser.age}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
