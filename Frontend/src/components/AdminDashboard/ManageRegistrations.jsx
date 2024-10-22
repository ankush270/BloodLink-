import React, { useState, useEffect } from 'react'; 
import { useSpring, animated } from '@react-spring/web';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ManageRegistrations = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', bloodType: 'A+', status: 'Pending', type: 'Person' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', bloodType: 'O-', status: 'Pending', type: 'Hospital' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', bloodType: 'B+', status: 'Pending', type: 'Person' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', bloodType: 'AB+', status: 'Pending', type: 'Hospital' },
  ];

  useEffect(() => {
    const fetchPendingUsers = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(sampleUsers);
        }, 1000);
      });
      setPendingUsers(data);
    };
    fetchPendingUsers();
  }, []);

  const handleApproval = (id, approved) => {
    if (approved) {
      setPendingUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === id ? { ...user, status: 'Approved' } : user
        )
      );
    } else {
      setPendingUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Pending User Registrations</h2>
      <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <tr>
    <th className="py-4 px-6 text-left">Name</th>
    <th className="py-4 px-6 text-left">Email</th>
    <th className="py-4 px-6 text-left">Blood Type</th>
    <th className="py-4 px-6 text-left">Status</th>
    <th className="py-4 px-6 text-left">Type</th>
    <th className="py-4 px-6 text-left">Actions</th>
  </tr>
</thead>
        <tbody>
          {pendingUsers.map((user, index) => (
            <TableRow key={user.id} user={user} handleApproval={handleApproval} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// TableRow component with improved content UI
const TableRow = ({ user, handleApproval, index }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: index * 200,
  });

  return (
    <animated.tr
  style={props}
  className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400 transition duration-300"
>
  <td className="py-4 px-6 flex items-center text-gray-800">
    {user.status === 'Approved' && <FaCheckCircle className="text-green-500 mr-2" />}
    {user.name}
  </td>
  <td className="py-4 px-6 text-gray-600">{user.email}</td>
  <td className="py-4 px-6 text-gray-600">{user.bloodType}</td>
  <td className="py-4 px-6 text-gray-600">
    <span className={`font-semibold ${user.status === 'Approved' ? 'text-green-500' : 'text-yellow-600'}`}>
      {user.status}
    </span>
  </td>
  <td className="py-4 px-6 text-gray-600">{user.type}</td>
  <td className="py-4 px-6 flex space-x-2">
    <button
      onClick={() => handleApproval(user.id, true)}
      className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
    >
      <FaCheckCircle className="mr-1" />
      Approve
    </button>
    <button
      onClick={() => handleApproval(user.id, false)}
      className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
    >
      <FaTimesCircle className="mr-1" />
      Reject
    </button>
  </td>
</animated.tr>

  );
};

export default ManageRegistrations;
