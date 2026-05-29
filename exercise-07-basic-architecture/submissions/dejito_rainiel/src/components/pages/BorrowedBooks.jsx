import { useMemo } from "react";

import { borrowedBookInstances } from "../../data/data";
import BorrowedBooksRow from "../borrowed-books/BorrowedBooksRow";

const TABLE_HEADERS = ["Title", "Member", "Borrowed", "Due Date", "Status"];

export default function BorrowedBooks() {
  const sortedBorrowedBooks = useMemo(() => {
    return borrowedBookInstances
      .filter((item) => item.isActive())
      .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borrowedBookInstances]);

  return (
    <div>
      <h2>Borrowed Books</h2>

      <table className="borrow-table">
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedBorrowedBooks.map((item) => {
            return (
              <BorrowedBooksRow
                key={item.id}
                item={item}
                book={item.book}
                member={item.member}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
