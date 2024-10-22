const Sidebar = ({ onSelect }) => {
    return (
      <div style={{ backgroundColor: '#1f2937' }} className="text-white w-64 p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li onClick={() => onSelect('requestBlood')} className="cursor-pointer p-2 hover:bg-gray-700">Request Blood</li>
          <li onClick={() => onSelect('organizeCamp')} className="cursor-pointer p-2 hover:bg-gray-700">Organize Camp</li>
          <li onClick={() => onSelect('logs')} className="cursor-pointer p-2 hover:bg-gray-700">View Logs</li>
          <li onClick={() => onSelect('history')} className="cursor-pointer p-2 hover:bg-gray-700">History</li>
          <li onClick={() => onSelect('notifications')} className="cursor-pointer p-2 hover:bg-gray-700">Notifications</li>
          <li onClick={() => onSelect('inventory')} className="cursor-pointer p-2 hover:bg-gray-700">Inventory Management</li>
          <li onClick={() => onSelect('analytics')} className="cursor-pointer p-2 hover:bg-gray-700">Analytics</li>
          <li onClick={() => onSelect('approval')} className="cursor-pointer p-2 hover:bg-gray-700">Approval Workflow</li>
          
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  