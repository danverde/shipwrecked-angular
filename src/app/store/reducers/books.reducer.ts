import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from '../actions/books.actions';
import { Book } from '../../models/books';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
