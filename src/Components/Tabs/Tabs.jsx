import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex space-x-4 border rounded-lg border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-4 rounded px-2 transition-colors duration-500 ${
              activeTab === tab.label
                ? "  text-[#000000] bg-[#F7A582]"
                : "text-gray-500 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className={`py-6  transition-opacity duration-2000 ${
          activeTab ? "opacity-100" : "opacity-0"
        }`}
        key={activeTab}
      >
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
