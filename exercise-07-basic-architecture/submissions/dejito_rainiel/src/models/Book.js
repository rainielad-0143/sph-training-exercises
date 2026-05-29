class Book {
  constructor({ id, title, authorId }, authors = []) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.author =
      authors.find((a) => Number(a.id) === Number(authorId)) || null;
  }

  getAuthorName() {
    return this.author?.name || "Unknown Author";
  }

  matches(query) {
    const q = query.toLowerCase();
    return (
      this.title.toLowerCase().includes(q) ||
      this.getAuthorName().toLowerCase().includes(q)
    );
  }
}

export default Book;
