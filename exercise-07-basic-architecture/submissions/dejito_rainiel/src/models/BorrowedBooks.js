class BorrowedBook {
  constructor({ id, bookId, memberId, borrowedDate, dueDate, returned }) {
    if (!id) throw new Error("BorrowedBook must have an id");
    if (!bookId) throw new Error("BorrowedBook must have a bookId");
    if (!memberId) throw new Error("BorrowedBook must have a memberId");
    if (!dueDate || isNaN(new Date(dueDate))) {
      throw new Error("BorrowedBook must have a valid dueDate");
    }
    if (typeof returned !== "boolean") {
      throw new Error("BorrowedBook returned must be a boolean");
    }

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
