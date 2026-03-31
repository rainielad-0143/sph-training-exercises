import { useState } from "react";
import { members, borrowedBooks, books } from "../data/data";

export default function MemberHistory() {
  const [search, setSearch] = useState("");
  const today = new Date();

  const member =
    search.trim() === ""
      ? []
      : members.find((member) =>
          member.name.toLowerCase().includes(search.toLowerCase()),
        );

  const history = member
    ? borrowedBooks.filter((borrower) => borrower.memberId === member.id)
    : [];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Member History</h2>

      <input
        type="text"
        placeholder="Search member by name…"
        value={search}
        onChange={handleChange}
      />

      {!member && search && (
        <p className="no-result">No member found matching "{search}".</p>
      )}

      {member && (
        <div className="member-result">
          <div className="member-badge">
            <span>👤</span>
            <strong>{member.name}</strong>
            <span style={{ opacity: 0.6 }}>
              · {history.length} record{history.length !== 1 ? "s" : ""}
            </span>
          </div>

          <ul className="list-container">
            {history.length === 0 && (
              <li style={{ fontStyle: "italic", opacity: 0.6 }}>
                Look for members
              </li>
            )}

            {history.map((item) => {
              const book = books.find((book) => book.id === item.bookId);
              const dueDate = new Date(item.dueDate);
              const isOverdue = !item.returned && dueDate < today;

              return (
                <li key={item.id} className={isOverdue ? "overdue" : ""}>
                  <span style={{ flex: 1 }}>{book?.title}</span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontStyle: "italic",
                      opacity: item.returned ? 0.55 : 1,
                      color: isOverdue ? "inherit" : "var(--forest-light)",
                    }}
                  >
                    {item.returned
                      ? "Returned"
                      : isOverdue
                        ? "Overdue"
                        : "Active"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
