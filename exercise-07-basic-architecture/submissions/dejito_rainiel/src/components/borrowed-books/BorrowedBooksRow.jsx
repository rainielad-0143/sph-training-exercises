import { formatDate, isBookOverdue } from "../../utils/utils";

function BorrowedBooksRow({ item, book, member }) {
  const overdue = isBookOverdue(item.dueDate);
  return (
    <tr className={overdue ? "overdue-row" : ""}>
      <td>{book?.title}</td>
      <td>{member?.name}</td>
      <td>{formatDate(item.borrowedDate)}</td>
      <td>{formatDate(item.dueDate)}</td>
      <td>{overdue ? "Overdue" : "Active"}</td>
    </tr>
  );
}

export default BorrowedBooksRow;
