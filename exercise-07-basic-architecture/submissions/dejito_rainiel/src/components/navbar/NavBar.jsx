function NavBar({ tabs, setActiveTab, activeTab }) {
  return (
    <div className="tab-nav-inner">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${isActive ? "active" : ""}`}
          >
            <img src={tab.icon} alt={tab.label} className="tab-icon" />
            <span className="tab-label">{tab.label}</span>
            {isActive && <span className="tab-underline" />}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
