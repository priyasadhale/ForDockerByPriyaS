import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(newBook);
    setNewBook({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
