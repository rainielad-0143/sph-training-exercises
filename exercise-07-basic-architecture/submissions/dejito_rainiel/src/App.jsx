import BookList from "./components/pages/Booklist";
import BorrowedBooks from "./components/pages/BorrowedBooks";
import MemberHistory from "./components/pages/MemberHistory";
import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import bookIcon from "./assets/icons/books.png";
import bookmark from "./assets/icons/bookmark.png";
import person from "./assets/icons/person.png";

const TABS = [
  {
    id: "books",
    label: "Book List",
    icon: bookIcon,
    component: BookList,
  },
  {
    id: "borrowed",
    label: "Borrowed Books",
    icon: bookmark,
    component: BorrowedBooks,
  },
  {
    id: "members",
    label: "Member History",
    icon: person,
    component: MemberHistory,
  },
];

const STORAGE_KEY = "ACTIVE_TAB";

function App() {
  const STORAGE_KEY = "ACTIVE_TAB";
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "books";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeTab);
  }, [activeTab]);

  const activeTabData = TABS.find((tab) => tab.id === activeTab);

  const ActiveComponent = activeTabData.component;

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
