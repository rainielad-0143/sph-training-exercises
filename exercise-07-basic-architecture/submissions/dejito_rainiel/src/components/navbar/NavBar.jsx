function NavBar({tabs, setActiveTab, activeTab}) {
  return (
    <div className="tab-nav-inner">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
          {activeTab === tab.id && <span className="tab-underline" />}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
