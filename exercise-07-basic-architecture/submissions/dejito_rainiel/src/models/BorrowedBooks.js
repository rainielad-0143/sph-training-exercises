class BorrowedBook {
  constructor(
    { id, bookId, memberId, borrowedDate, dueDate, returned },
    books = [],
    members = [],
  ) {
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
    this.book = books.find((b) => Number(b.id) === Number(bookId)) || null;
    this.member =
      members.find((m) => Number(m.id) === Number(memberId)) || null;

    if (!this.book) throw new Error(`Book with id ${bookId} not found`);
    if (!this.member) throw new Error(`Member with id ${memberId} not found`);
  }

  isOverdue() {
    return new Date(this.dueDate) < new Date();
  }

  isActive() {
    return !this.returned;
  }

  getStatus() {
    if (this.returned) return "Returned";
    return this.isOverdue() ? "Overdue" : "Active";
  }
}

export default BorrowedBook;
