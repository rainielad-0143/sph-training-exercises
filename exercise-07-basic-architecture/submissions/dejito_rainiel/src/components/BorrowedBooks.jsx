import { borrowedBooks, books, members } from "../data/data";

export default function BorrowedBooks() {
  const today = new Date();

  const activeSorted = [...borrowedBooks]
    .filter((b) => !b.returned)
    .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

  return (
    <div>
      <h2>Borrowed Books</h2>

      <table className="borrow-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Member</th>
            <th>Borrowed Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {activeSorted.map((item) => {
            const book = books.find((book) => book.id === item.bookId);
            const member = members.find(
              (member) => member.id === item.memberId,
            );

            const dueDate = new Date(item.dueDate);
            const isOverdue = dueDate < today;

            return (
              <tr key={item.id} className={isOverdue ? "overdue-row" : ""}>
                <td>{book?.title}</td>
                <td>{member?.name}</td>
                <td>{new Date(item.borrowedDate).toLocaleDateString()}</td>
                <td>{new Date(item.dueDate).toLocaleDateString()}</td>
                <td>{isOverdue ? "Overdue" : "Active"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
