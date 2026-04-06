import { books, authors } from "../data/data";
import { useState } from "react";

export default function BookList() {
  const [sortBy, setSortBy] = useState("title");
  const [asc, setAsc] = useState(true);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const author = authors.find((author) => author.id === book.authorId);

    return (
      book.title.toLowerCase().includes(input.toLowerCase()) ||
      author?.name.toLowerCase().includes(input.toLowerCase())
    );
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    let valA;
    let valB;

    if (sortBy === "title") {
      valA = a.title;
      valB = b.title;
    } else {
      valA = authors.find((auth) => auth.id === a.authorId)?.name || "";
      valB = authors.find((auth) => auth.id === b.authorId)?.name || "";
    }

    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <div>
      <h2>Book List</h2>

      <div className="controls">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search a book..."
        />

        <label>Sort by:</label>

        <select value={sortBy} onChange={handleChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        <button onClick={() => setAsc(!asc)}>{asc ? "↑ Asc" : "↓ Desc"}</button>
      </div>

      {input && sortedBooks.length === 0 ? (
        <p style={{ marginTop: "15px" }}>No books found for "{input}"</p>
      ) : (
        <ul>
          {sortedBooks.map((book) => {
            const author = authors.find((a) => a.id === book.authorId);
            return (
              <li key={book.id}>
                {book.title} - <em>{author?.name}</em>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
