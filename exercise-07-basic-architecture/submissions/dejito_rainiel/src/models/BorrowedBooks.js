class BorrowedBook {
  constructor({ id, bookId, memberId, borrowedDate, dueDate, returned }) {
    this.id = id;
    this.bookId = bookId;
    this.memberId = memberId;
    this.borrowedDate = borrowedDate;
    this.dueDate = dueDate;
    this.returned = returned;
  }

  isOverdue() {
    return new Date(this.dueDate) < new Date();
  }

  isActive() {
    return !this.returned;
  }

  getStatus() {
    return this.isOverdue() ? "Overdue" : "Active";
  }
}

export default BorrowedBook;
