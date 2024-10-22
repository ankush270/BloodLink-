import React, { useState } from 'react';

// Dummy data for blood inventory
const initialInventory = [
  { id: 1, bloodType: 'A+', quantity: 10, expiryDate: '2024-12-01' },
  { id: 2, bloodType: 'B-', quantity: 5, expiryDate: '2024-11-15' },
  { id: 3, bloodType: 'O+', quantity: 8, expiryDate: '2025-01-20' },
  { id: 4, bloodType: 'AB+', quantity: 3, expiryDate: '2024-10-10' },
  { id: 5, bloodType: 'A-', quantity: 12, expiryDate: '2024-09-25' },
];

const InventoryManagement = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterText, setFilterText] = useState('');

  // Function to remove blood units
  const handleRemoveBlood = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  // Function to sort inventory
  const sortInventory = (key) => {
    const sortedInventory = [...inventory].sort((a, b) => {
      if (key === 'expiryDate') {
        return sortOrder === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      return sortOrder === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
    setInventory(sortedInventory);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to filter inventory
  const filteredInventory = inventory.filter(item =>
    item.bloodType.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Blood Inventory Management</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Blood Type..."
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600 cursor-pointer" onClick={() => sortInventory('bloodType')}>
              Blood Type
            </th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600 cursor-pointer" onClick={() => sortInventory('quantity')}>
              Quantity
            </th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600 cursor-pointer" onClick={() => sortInventory('expiryDate')}>
              Expiry Date
            </th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length > 0 ? (
            filteredInventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition duration-200">
                <td className="py-2 px-4 border-b text-sm text-gray-700">{item.bloodType}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{item.quantity}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{item.expiryDate}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">
                  <button
                    onClick={() => handleRemoveBlood(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 border-b text-sm text-gray-700 text-center">
                No items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Expiry Alerts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Expiry Alerts</h3>
        <ul className="list-disc pl-5">
          {inventory.filter(item => new Date(item.expiryDate) < new Date()).map(item => (
            <li key={item.id} className="text-red-500">
              {item.bloodType} is expired!
            </li>
          ))}
          {inventory.filter(item =>
            new Date(item.expiryDate) > new Date() &&
            new Date(item.expiryDate) < new Date(new Date().setDate(new Date().getDate() + 30))
          ).map(item => (
            <li key={item.id} className="text-orange-500">
              {item.bloodType} will expire soon on {item.expiryDate}!
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManagement;
