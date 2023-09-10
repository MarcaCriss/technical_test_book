import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './../../../../shared/interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book?: Book;
  @Input() showButtonDeleteBook?: boolean = false;
  @Input() showButtonAddBook?: boolean = false;
  @Output() clickDeleteBook: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() clickAddBook: EventEmitter<Book> = new EventEmitter<Book>();

  deleteBook(): void {
    this.clickDeleteBook?.emit();
  }

  addBook(): void {
    this.clickAddBook?.emit();
  }
}
