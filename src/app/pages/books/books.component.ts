import { Component, OnInit } from '@angular/core';
import data from './../../../assets/data/books.json';
import { Book } from 'src/app/shared/interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = data.library.map((book) => book.book);
  readingBooks: Book[] = [];
  ngOnInit(): void {
    console.log(this.books);
  }

  addBook(book: Book): void {
    book.isReadingBook = true;
    this.readingBooks.push(book);
  }

  deleteBook(book: Book): void {
    book.isReadingBook = false;
    const index = this.readingBooks.indexOf(book);
    this.readingBooks.splice(index, 1);
  }
}
