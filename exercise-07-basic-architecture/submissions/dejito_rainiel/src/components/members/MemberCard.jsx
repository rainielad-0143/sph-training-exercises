function MemberCard({ item, book, today }) {
  const dueDate = new Date(item.dueDate);

  const isOverdue = !item.returned && dueDate < today;

  let status = {
    label: "Active",
    className: "active",
  };

  if (item.returned) {
    status = {
      label: "Returned",
      className: "returned",
    };
  } else if (isOverdue) {
    status = {
      label: "Overdue",
      className: "overdue-status",
    };
  }

  return (
    <p className={isOverdue ? "overdue" : ""}>
      <span>{book?.title} - </span>

      <span className={`book-status ${status.className}`}>{status.label}</span>
    </p>
  );
}

export default MemberCard;
