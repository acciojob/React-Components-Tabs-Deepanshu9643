import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div
        className="tab"
        id="Home-tab"
        onClick={() => handleTabClick("Home")}
      >
        Home
      </div>
      <div
        className="tab"
        id="About-tab"
        onClick={() => handleTabClick("About")}
      >
        About
      </div>
      <div
        className="tab"
        id="Features-tab"
        onClick={() => handleTabClick("Features")}
      >
        Features
      </div>
      <div className="viewport">
        <p>{activeTab} Page Goes Here</p>
      </div>
    </div>
  );
}

export default Tabs

