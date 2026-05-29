import { formatDate } from "../../utils/utils";

function BorrowedBooksRow({ item, book, member }) {
  return (
    <tr className={item.isOverdue() ? "overdue-row" : ""}>
      <td>{book?.title}</td>
      <td>{member?.name}</td>
      <td>{formatDate(item.borrowedDate)}</td>
      <td>{formatDate(item.dueDate)}</td>
      <td>{item.getStatus()}</td>
    </tr>
  );
}

export default BorrowedBooksRow;
