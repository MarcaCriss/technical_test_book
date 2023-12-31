import { Component, OnInit } from '@angular/core';
import data from './../../../assets/data/books.json';
import { Book } from 'src/app/shared/interfaces/book.interface';
import { BookGenre } from 'src/app/shared/enums/book-genre.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = data.library.map((book) => ({
    ...book.book,
    isReadingBook: false,
  }));
  readingBooks: Book[] = [];
  bookGenreOptions = Object.entries(BookGenre).map(([key, value]) => ({
    label: value,
    value: value,
  }));
  selectedBookGenre: BookGenre = BookGenre.All;

  ngOnInit(): void {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
    this.readingBooks = this.books.filter((book) => book.isReadingBook);
  }

  addBook(book: Book): void {
    if (book.isReadingBook) return;
    book.isReadingBook = true;
    this.readingBooks.push(book);
    this.saveInLocalStorage();
  }

  deleteBook(b: Book): void {
    const book = this.books.find((book) => book.title === b.title);
    if (!book) return;
    book.isReadingBook = false;
    const index = this.readingBooks.indexOf(book);
    this.readingBooks.splice(index, 1);
    this.saveInLocalStorage();
  }

  saveInLocalStorage(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  get booksFiltered(): Book[] {
    if (this.selectedBookGenre !== BookGenre.All) {
      return this.books.filter((book) => book.genre === this.selectedBookGenre);
    }
    return this.books;
  }
}
