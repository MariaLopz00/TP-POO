// src/classes/Book.ts

export class Book {
    private title: string;
    private author: string;
    private isAvailable: boolean = true;
  
    constructor(title: string, author: string) {
      this.title = title;
      this.author = author;
    }
  
    getTitle() {
      return this.title;
    }
  
    getAuthor() {
      return this.author;
    }
  
    isBookAvailable() {
      return this.isAvailable;
    }
  
    borrowBook() {
      this.isAvailable = false;
    }
  
    returnBook() {
      this.isAvailable = true;
    }
}
  

  