import { useState, useMemo } from "react";
import { members, borrowedBooks, books } from "../../data/data";
import MemberCard from "../members/MemberCard";
import { createMapById } from "../../utils/utils";
import person from "../../assets/icons/person.png";

export default function MemberHistory() {
  const [search, setSearch] = useState("");
  const today = new Date();

  const normalizedSearch = search.toLowerCase();

  const historyMap = useMemo(() => {
    return borrowedBooks.reduce((acc, item) => {
      if (!acc[item.memberId]) {
        acc[item.memberId] = [];
      }

      acc[item.memberId].push(item);

      return acc;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borrowedBooks]);

  const filteredMembers = useMemo(() => {
    return search.trim() === ""
      ? members
      : members.filter((m) => m.name.toLowerCase().includes(normalizedSearch));
  }, [search, normalizedSearch]);

  const bookMap = useMemo(
    () => createMapById(books),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [books],
  );

  return (
    <div>
      <h2>Member History</h2>

      <input
        type="text"
        placeholder="Search member by name…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="member-search"
      />

      <div className="member-list">
        {filteredMembers.map((member) => {
          const history = historyMap[member.id] || [];
          const recordLabel = history.length === 1 ? "record" : "records";

          return (
            <div key={member.id} className="member-card">
              <div className="member-header">
                <img src={person} alt="member-icon" width="24px" />
                <strong>{member.name}</strong>
                <span className="muted">
                  · {history.length} {recordLabel}
                </span>
              </div>

              {history.length === 0 ? (
                <p className="empty-text">No borrowed books on record.</p>
              ) : (
                <ul className="list-container">
                  {history.map((item) => {
                    return (
                      <MemberCard
                        key={item.id}
                        item={item}
                        book={bookMap[item.bookId]}
                        today={today}
                      />
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
