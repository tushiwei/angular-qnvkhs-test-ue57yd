import { Book } from './book.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  favorites: ReadonlyArray<string>;
}
