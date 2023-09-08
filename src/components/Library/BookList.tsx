// src/components/BookList.tsx

import React from 'react';
import { Book } from '../../class/library/book';

interface BookListProps {
  books: Book[];
  borrowBook: (book: Book) => void;
  returnBook: (book: Book) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, borrowBook, returnBook }) => {
  const handleBorrow = (book: Book) => {
    borrowBook(book);
  };

  const handleReturn = (book: Book) => {
    returnBook(book);
  };

  return (
    <div>
      <h3>Lista de Libros</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book.getTitle()}</span> - <span>{book.getAuthor()}</span>
            <button onClick={() => handleBorrow(book)}>Prestar</button>
            <button onClick={() => handleReturn(book)}>Devolver</button>
            {book.isBookAvailable() ? '(Disponible)' : '(Prestado)'}
          </li>
        ))}
      </ul>
    </div>
  );
}
