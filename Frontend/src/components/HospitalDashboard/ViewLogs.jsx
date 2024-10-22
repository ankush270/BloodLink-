import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

const ViewLogs = () => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const logs = [
    { id: 1, bloodType: 'A+', quantity: 2, status: 'Completed', date: '2024-10-20' },
    { id: 2, bloodType: 'B-', quantity: 1, status: 'Pending', date: '2024-10-21' },
    { id: 3, bloodType: 'O+', quantity: 3, status: 'Cancelled', date: '2024-10-22' },
    { id: 4, bloodType: 'AB+', quantity: 1, status: 'In Progress', date: '2024-10-23' },
    { id: 5, bloodType: 'A-', quantity: 5, status: 'Completed', date: '2024-10-24' },
  ];

  const filteredLogs = logs.filter(log =>
    log.bloodType.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedLogs = filteredLogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const getStatusInfo = (status) => {
    switch (status) {
      case 'Completed':
        return { color: 'text-green-500', icon: <FaCheckCircle className="inline-block mr-1" /> };
      case 'Pending':
        return { color: 'text-yellow-500', icon: <FaExclamationTriangle className="inline-block mr-1" /> };
      case 'Cancelled':
        return { color: 'text-red-500', icon: <FaTimesCircle className="inline-block mr-1" /> };
      case 'In Progress':
        return { color: 'text-blue-500', icon: <FaSpinner className="inline-block mr-1 animate-spin" /> };
      default:
        return { color: 'text-gray-500', icon: null };
    }
  };

  const handleRowClick = (log) => {
    alert(`Details for ${log.bloodType}: ${log.status} on ${log.date}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">View Blood Logs</h2>

      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Filter by Blood Type"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded flex-grow mr-2"
        />
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="asc">Sort by Date Ascending</option>
          <option value="desc">Sort by Date Descending</option>
        </select>
      </div>

      <h3 className="text-lg font-semibold mb-2">Blood Request Logs</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600 cursor-pointer" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
              Blood Type
            </th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Quantity</th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600">Status</th>
            <th className="py-3 px-4 border-b text-left text-sm font-medium text-gray-600 cursor-pointer" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedLogs.length > 0 ? (
            sortedLogs.map(log => {
              const { color, icon } = getStatusInfo(log.status);
              return (
                <tr key={log.id} onClick={() => handleRowClick(log)} className="cursor-pointer hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4 border-b text-sm text-gray-700">{log.bloodType}</td>
                  <td className="py-2 px-4 border-b text-sm text-gray-700">{log.quantity}</td>
                  <td className={`py-2 px-4 border-b text-sm ${color}`}>
                    {icon}
                    {log.status}
                  </td>
                  <td className="py-2 px-4 border-b text-sm text-gray-700">{log.date}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 border-b text-sm text-gray-700 text-center">
                No logs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-2">Notification History</h3>
      <ul className="border border-gray-300 rounded-lg bg-white shadow-md">
        {/* Replace this section with real notifications as needed */}
        <li className="py-2 px-4 border-b flex justify-between">
          <span className="font-semibold">A+ blood request created</span>
          <span className="text-gray-500">2024-10-20</span>
        </li>
        <li className="py-2 px-4 border-b flex justify-between">
          <span className="font-semibold">Blood donation camp scheduled</span>
          <span className="text-gray-500">2024-10-19</span>
        </li>
        <li className="py-2 px-4 flex justify-between">
          <span className="font-semibold">B- blood request fulfilled</span>
          <span className="text-gray-500">2024-10-18</span>
        </li>
      </ul>
    </div>
  );
};

export default ViewLogs;
