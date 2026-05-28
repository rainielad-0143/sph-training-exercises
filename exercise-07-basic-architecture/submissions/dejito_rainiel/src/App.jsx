import Booklist from "./components/Booklist";
import BorrowedBooks from "./components/BorrowedBooks";
import MemberHistory from "./components/MemberHistory";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";

const TABS = [
  { id: "books", label: "Book List", icon: "📚" },
  { id: "borrowed", label: "Borrowed Books", icon: "🔖" },
  { id: "members", label: "Member History", icon: "👤" },
];

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("ACTIVE_TAB") || "books";
  });

  useEffect(() => {
    localStorage.setItem("ACTIVE_TAB", activeTab);
  }, [activeTab]);

  const TAB_COMPONENTS = {
    books: Booklist,
    borrowed: BorrowedBooks,
    members: MemberHistory,
  };

  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="app-wrapper">
      <div className="noise-overlay" />

      <header className="app-header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="logo-icon">⬡</span>
          </div>
          <div className="header-text">
            <h1 className="header-title">Library Management System</h1>
          </div>
        </div>
      </header>

      <nav className="tab-nav">
        <NavBar tabs={TABS} setActiveTab={setActiveTab} activeTab={activeTab} />
      </nav>

      <main className="app-main">
        <div className="content-card">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
