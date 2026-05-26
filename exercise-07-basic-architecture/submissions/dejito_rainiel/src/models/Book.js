class Book {
  constructor({ id, title, authorId }, authors = []) {
    if (!id) {
      throw new Error("Book must have an id");
    }
    if (!title || typeof title !== "string" || title.trim() === "") {
      throw new Error("Book must have a valid title");
    }
    if (!authorId) {
      throw new Error("Book must have an authorId");
    }

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
    if (typeof query !== "string") return false;
    const q = query.toLowerCase();
    return (
      this.title.toLowerCase().includes(q) ||
      this.getAuthorName().toLowerCase().includes(q)
    );
  }
}

export default Book;
