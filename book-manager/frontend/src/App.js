import React from 'react';
import BookManager from './components/BookManager';

// This is the root component of the React app, serving as an entry point.
const App = () => {
  return (
    <div>
      <h1>Book Manager</h1>
      <BookManager />
    </div>
  );
};

export default App;