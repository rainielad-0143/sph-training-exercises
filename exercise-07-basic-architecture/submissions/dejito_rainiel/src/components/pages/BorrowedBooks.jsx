import { borrowedBooks, books, members } from "../../data/data";
import BorrowedBooksRow from "../borrowed-books/BorrowedBooksRow";
import { createMapById } from "../../utils/utils";

const TABLE_HEADERS = ["Title", "Member", "Borrowed", "Due Date", "Status"];

export default function BorrowedBooks() {
  const sortedBorrowedBooks = [...borrowedBooks]
    .filter((b) => !b.returned)
    .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

  const bookMap = createMapById(books);
  const memberMap = createMapById(members);

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
            const book = bookMap[item.bookId];
            const member = memberMap[item.memberId];

            return (
              <BorrowedBooksRow
                key={item.id}
                item={item}
                book={book}
                member={member}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
