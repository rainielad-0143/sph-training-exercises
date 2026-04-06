import { useState } from "react";
import { members, borrowedBooks, books } from "../data/data";
import MemberCard from "./MemberCard";

export default function MemberHistory() {
  const [search, setSearch] = useState("");
  const today = new Date();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // filter members by search text
  const filteredMembers =
    search.trim() === ""
      ? members
      : members.filter((m) =>
          m.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div>
      <h2>Member History</h2>

      <input
        type="text"
        placeholder="Search member by name…"
        value={search}
        onChange={handleChange}
        className="member-search"
      />

      <div className="member-list">
        {filteredMembers.map((member) => {
          const history = borrowedBooks.filter((b) => b.memberId === member.id);

          return (
            <div key={member.id} className="member-card">
              <div className="member-header">
                <span>👤</span>
                <strong>{member.name}</strong>
                <span style={{ opacity: 0.6 }}>
                  · {history.length} record{history.length !== 1 ? "s" : ""}
                </span>
              </div>

              {history.length === 0 ? (
                <p style={{ fontStyle: "italic", opacity: 0.6 }}>
                  No borrowed books on record.
                </p>
              ) : (
                <ul className="list-container">
                  {history.map((item) => {
                    return (
                      <MemberCard item={item} books={books} today={today} />
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
