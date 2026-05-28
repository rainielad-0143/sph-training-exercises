import { useState, useMemo } from "react";

import { books, authors } from "../data/data";
import Books from "./books/Books";

export default function BookList() {
  const [sortBy, setSortBy] = useState("title");
  const [asc, setAsc] = useState(true);
  const [input, setInput] = useState("");

  const normalizedInput = input.toLowerCase();

  const booksWithAuthors = useMemo(() => {
    return books.map((book) => ({
      ...book,
      author: authors.find((author) => author.id === book.authorId),
    }));
  }, []);

  const filteredBooks = booksWithAuthors.filter((book) => {
    return (
      book.title.toLowerCase().includes(normalizedInput) ||
      book.author?.name.toLowerCase().includes(normalizedInput)
    );
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    const getValue = (book) =>
      sortBy === "title" ? book.title : book.author?.name || "";

    const valA = getValue(a);
    const valB = getValue(b);

    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <div>
      <h2>Book List</h2>

      <div className="controls">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search a book..."
        />

        <label>Sort by:</label>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        <button onClick={() => setAsc(() => !asc)}>
          {asc ? "↑ Asc" : "↓ Desc"}
        </button>
      </div>

      {input && sortedBooks.length === 0 ? (
        <p style={{ marginTop: "15px" }}>No books found for "{input}"</p>
      ) : (
        <ul>
          {sortedBooks.map((book) => (
            <Books key={book.id} book={book} author={book.author} />
          ))}
        </ul>
      )}
    </div>
  );
}
