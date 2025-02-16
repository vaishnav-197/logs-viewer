import React from 'react';

export enum NavItem {
  Dashboard = "Dashboard",
  // Add more items here if needed.
}

interface SidebarProps {
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: NavItem[] = [NavItem.Dashboard]; // Extend this array for more navigation items

  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <nav className="mt-4">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none ${
              activeTab === item ? 'bg-gray-700' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
