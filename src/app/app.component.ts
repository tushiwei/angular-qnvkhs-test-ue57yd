import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectFavorites, selectBooks } from './state/books.selectors';
import { retrievedBookList } from './state/books.actions';
import { BooksService } from './state/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  favorites$ = this.store.select(selectFavorites);

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
