import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from './book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectFavoritesState = createFeatureSelector<
  ReadonlyArray<string>
>('favorites');

export const selectFavorites = createSelector(
  selectBooks,
  selectFavoritesState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
