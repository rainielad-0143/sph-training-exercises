function Books({ book, author }) {
  return (
    <li key={book.id}>
      {book.title} - <em>{author?.name}</em>
    </li>
  );
}

export default Books;
