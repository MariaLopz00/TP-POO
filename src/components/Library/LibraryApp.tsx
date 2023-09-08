// src/components/LibraryApp.tsx

import React, { useState } from 'react';
import { Book } from '../../class/library/book';
import { BookForm } from './BookForm';
import { BookList } from './BookList';

const LibraryApp = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (title: string, author: string) => {
    const newBook = new Book(title, author);
    setBooks([...books, newBook]);
  };

  const borrowBook = (bookToBorrow: Book) => {
    const updatedBooks = books.map((book) => {
      if (book === bookToBorrow) {
        // Llamamos al método borrowBook en la instancia específica del libro
        book.borrowBook();
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const returnBook = (bookToReturn: Book) => {
    const updatedBooks = books.map((book) => {
      if (book === bookToReturn) {
        // Llamamos al método returnBook en la instancia específica del libro
        book.returnBook();
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2>Biblioteca Virtual</h2>
      <BookForm addBook={addBook} />
      <BookList books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </div>
  );
}

export default LibraryApp;
