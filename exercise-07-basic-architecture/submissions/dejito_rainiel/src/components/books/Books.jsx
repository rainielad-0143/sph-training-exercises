function Books({ book, authorName }) {
  return (
    <li>
      {book.title} - <em>{authorName || "Unknown Author"}</em>
    </li>
  );
}

export default Books;
