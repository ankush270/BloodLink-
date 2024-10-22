import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

const ApprovalWorkflow = () => {
  // Dummy data for blood requests
  const [requests, setRequests] = useState([
    { id: 1, bloodType: 'A+', urgency: 'High', status: 'Pending' },
    { id: 2, bloodType: 'B-', urgency: 'Medium', status: 'Pending' },
    { id: 3, bloodType: 'O+', urgency: 'Low', status: 'Pending' },
  ]);

  // Function to handle approval
  const handleApproval = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  // Function to handle rejection
  const handleRejection = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Approval Workflow</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-2 px-4 border">Blood Type</th>
            <th className="py-2 px-4 border">Urgency</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className={request.status === 'Approved' ? 'bg-green-100' : request.status === 'Rejected' ? 'bg-red-100' : ''}>
              <td className="py-2 px-4 border text-center">{request.bloodType}</td>
              <td className="py-2 px-4 border text-center">{request.urgency}</td>
              <td className="py-2 px-4 border text-center">{request.status}</td>
              <td className="py-2 px-4 border text-center">
                <button
                  onClick={() => handleApproval(request.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2 transition duration-200 hover:bg-green-600"
                  disabled={request.status !== 'Pending'}
                  aria-label="Approve Request"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => handleRejection(request.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded transition duration-200 hover:bg-red-600"
                  disabled={request.status !== 'Pending'}
                  aria-label="Reject Request"
                >
                  <FaTimes />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalWorkflow;
