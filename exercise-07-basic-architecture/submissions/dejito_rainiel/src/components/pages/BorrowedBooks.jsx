import { borrowedBooks, books, members } from "../../data/data";
import BorrowedBooksRow from "../borrowed-books/BorrowedBooksRow";
import { createMapById } from "../../utils/utils";
import { useMemo } from "react";

const TABLE_HEADERS = ["Title", "Member", "Borrowed", "Due Date", "Status"];

export default function BorrowedBooks() {
  const bookMap = useMemo(
    () => createMapById(books),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [books],
  );

  const memberMap = useMemo(
    () => createMapById(members),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [members],
  );

  const sortedBorrowedBooks = useMemo(() => {
    return borrowedBooks
      .filter((item) => !item.returned)
      .map((item) => ({
        ...item,
        book: bookMap[item.bookId],
        member: memberMap[item.memberId],
      }))
      .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borrowedBooks, bookMap, memberMap]);

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
