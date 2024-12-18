import React, { useState } from 'react';
import './Tabs.css'; // Import external CSS for styling

function Tabs() {
  // Tab data
  const tabData = [
    { id: 'home', label: 'Home', content: 'Welcome to the Home page!' },
    { id: 'about', label: 'About', content: 'Learn more about us on this page.' },
    { id: 'contact', label: 'Contact', content: 'Contact us at mohan_le1@gmail.com' },
    { id: 'services', label: 'Services', content: 'Explore the react sevices' },
    { id: 'blog', label: 'Blog', content: 'Read our latest blog posts and updates.' },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  // Render active tab content
  const renderContent = () => {
    const activeTabData = tabData.find(tab => tab.id === activeTab);
    return activeTabData ? <p>{activeTabData.content}</p> : null;
  };

  return (
    <div className="tabs-container">
      {/* Tab buttons */}
      <div className="tabs-header">
        {tabData.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
}

export default Tabs;
