import React, { useState } from 'react';
import Sidebar, { NavItem } from './components/SideBar';
import TableComponent from './components/TableComponent';

const App: React.FC = () => {
  // Set the default active tab to Dashboard.
  const [activeTab, setActiveTab] = useState<NavItem>(NavItem.Dashboard);

  const renderContent = () => {
    switch (activeTab) {
      case NavItem.Dashboard:
        return <TableComponent />;
      // Additional cases for other nav items can be added here.
      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
