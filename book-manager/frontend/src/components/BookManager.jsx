import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const BookManager = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:5000/books', newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // ReactJS - frontend, NodeJS - backend stack

  const updateBook = async (id, updatedBook) => {
    try {
      const response = await axios.put(`http://localhost:5000/books/${id}`, updatedBook);
      setBooks(books.map(book => (book.id === id ? response.data : book)));
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <AddBookForm onAddBook={addBook} />
      <BookList books={books} onUpdateBook={updateBook} onDeleteBook={deleteBook} />
    </div>
  );
};

export default BookManager;