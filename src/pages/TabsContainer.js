import React, { useState } from 'react';
import { tabs } from './TabsData';
import FlightTab from './FlightTab';


const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const renderContent = () => {
    switch (activeTab) {
      case 'flights':
        return <FlightTab />;

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-[600px] bg-cover bg-center py-8 px-4 font-inter">
      <div className="max-w-6xl mx-auto" style={{ paddingTop: "70px" }}>
        {/* Tabs */}
        <div className="bg-white rounded-t-xl px-6 py-4 flex justify-between shadow-md">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-col items-center justify-center text-center px-2 py-2 relative w-[80px] cursor-pointer ${
                activeTab === tab.id
                  ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                  : 'text-gray-800'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.label}</span>
              {tab.new && (
                <span className="absolute -top-2 text-[10px] bg-pink-500 text-white px-1 rounded-sm">
                  new
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-xl shadow-md px-6 pb-8 space-y-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
