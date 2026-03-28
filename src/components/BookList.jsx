function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.title} className="book-card">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  )
}

export default BookList
