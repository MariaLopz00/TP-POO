// src/components/BookForm.tsx

import React, { useState } from 'react';

interface BookFormProps {
  addBook: (title: string, author: string) => void;
}

export const BookForm: React.FC<BookFormProps> = ({ addBook }) => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <h3>Agregar Libro</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del libro"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor del libro"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}


