function MemberCard({ item, books, today }) {
  const book = books.find((b) => b.id === item.bookId);
  const dueDate = new Date(item.dueDate);
  const isOverdue = !item.returned && dueDate < today;
  return (
    <p key={item.id} className={isOverdue ? "overdue" : ""}>
      <span>{book?.title} - </span>
      <span
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          opacity: item.returned ? 0.55 : 1,
          color: isOverdue ? "inherit" : "var(--forest-light)",
        }}
      >
        {item.returned ? "Returned" : isOverdue ? "Overdue" : "Active"}{" "}
      </span>
    </p>
  );
}

export default MemberCard;
