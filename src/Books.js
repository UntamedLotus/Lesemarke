import React from "react";
import BookTag from "../src/image/books.png";

export default function Books({ books, deleteBook }) {
	return books.map((book) => (
		<div className='book-png' key={book.id}>
			<img
				src={BookTag}
				alt='books-tag'
				style={{ height: "5rem", width: "5rem" }}
			/>
			<section>
				<p>
					Name of book: <strong>{book.bookName}</strong>
				</p>
				<p>
					Page Number: <strong>{book.pageNumber}</strong>
				</p>
			</section>

			<div className='clear' onClick={() => deleteBook(book.id)}>
				<ion-icon name='close-outline'></ion-icon>
			</div>
		</div>
	));
}
