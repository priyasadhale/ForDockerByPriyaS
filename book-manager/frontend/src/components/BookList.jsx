import React from 'react';

const BookList = ({ books, onUpdateBook, onDeleteBook }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => onUpdateBook(book.id, { title: 'Updated Title', author: book.author })}>Update</button>
          <button onClick={() => onDeleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;