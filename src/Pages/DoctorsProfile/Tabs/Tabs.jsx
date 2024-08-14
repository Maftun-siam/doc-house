import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [slideDirection, setSlideDirection] = useState("right");

    const handleTabClick = (tab) => {
        // Determine slide direction
        setSlideDirection(activeTab < tab ? "right" : "left");
        setActiveTab(tab);
    };

    const getSlideClass = () => {
        return slideDirection === "right" 
            ? "animate-slideInFromRight" 
            : "animate-slideInFromLeft";
    };

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <div className="flex border-b">
                <button
                    className={`py-2 px-4 ${activeTab === 'Overview'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Overview")}
                >
                    Overview
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Locations'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Locations")}
                >
                    Locations
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Reviews'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Reviews")}
                >
                    Reviews
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'Business Hours'
                        ? 'bg-orange-300 text-white rounded-t-md' // Active tab styling
                        : 'bg-white text-gray-600' // Inactive tab styling
                        }`}
                    onClick={() => handleTabClick("Business Hours")}
                >
                    Business Hours
                </button>
            </div>

            <div className={`p-4 relative ${getSlideClass()}`}>
                <div className={`${activeTab === "Overview" ? "block" : "hidden"}`}>
                    Overview Content
                </div>
                <div className={`${activeTab === "Locations" ? "block" : "hidden"}`}>
                    Locations Content
                </div>
                <div className={`${activeTab === "Reviews" ? "block" : "hidden"}`}>
                    Reviews Content
                </div>
                <div className={`${activeTab === "Business Hours" ? "block" : "hidden"}`}>
                    Business Hours Content
                </div>
            </div>
        </div>
    );
};

export default Tabs;
