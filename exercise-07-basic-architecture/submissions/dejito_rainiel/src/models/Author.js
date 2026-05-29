class Author {
  constructor({ id, name }) {
    if (!id) throw new Error("Author must have an id");
    if (!name || typeof name !== "string" || name.trim() === "") {
      throw new Error("Author must have a valid name");
    }

    this.id = id;
    this.name = name;
  }
}

export default Author;
