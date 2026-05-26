import { useState } from "react";

<<<<<<<< HEAD:exercise-07-basic-architecture/submissions/dejito_rainiel/src/components/pages/Booklist.jsx
import { books } from "../../data/data";
import Books from "../books/Books";

import Book from "../../models/Book";
========
import { books, authors } from "../../data/data";
import Books from "../books/Books";
>>>>>>>> 00af33f (Added DRY principle in BorrowedBooks and MemberHistory):exercise-07-basic-architecture/submissions/dejito_rainiel/src/components/main/Booklist.jsx

export default function BookList() {
  const [sortBy, setSortBy] = useState("title");
  const [asc, setAsc] = useState(true);
  const [input, setInput] = useState("");

  const normalizedInput = input.toLowerCase();

  const filteredBooks = books.filter((book) => book.matches(normalizedInput));

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    const getValue = (book) =>
      sortBy === "title" ? book.title : book.getAuthorName();

    return asc
      ? getValue(a).localeCompare(getValue(b))
      : getValue(b).localeCompare(getValue(a));
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
          {sortedBooks.map((book) => {
            return (
              <Books
                key={book.id}
                book={book}
                authorName={book.getAuthorName()}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
