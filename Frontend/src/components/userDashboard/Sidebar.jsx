import React from 'react';

const Sidebar = ({ currentSection, setCurrentSection }) => {
  return (
    <div className="bg-gray-800 text-white w-64 mt-16 h-screen fixed inset-y-0 left-0 p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Blood Bank</h2>
      <ul>
        <li className={`mb-4 cursor-pointer ${currentSection === 'donation' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('donation')}>
          Schedule Blood Donation
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'request' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('request')}>
          Request Blood
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'notifications' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('notifications')}>
          Notifications
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'history' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('history')}>
          Blood Donation History
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'profile' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('profile')}>
          Health Profile
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'userprofile' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('userprofile')}>
          User Profile
        </li>
        <li className={`mb-4 cursor-pointer ${currentSection === 'statistics' ? 'text-blue-300' : ''}`} onClick={() => setCurrentSection('statistics')}>
          Statics Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
