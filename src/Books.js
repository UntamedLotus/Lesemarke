import React from "react";

export default function Books({ books, deleteBook }) {
  return books.map((book) => (
    <div className="book-png" key={book.id}>
      <p>
        Name of book: <strong>{book.bookName}</strong>
      </p>
      <p>
        Page Number: <strong>{book.pageNumber}</strong>
      </p>
      <div className="clear" onClick={() => deleteBook(book.id)}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className="break"></div>
    </div>
  ));
}
