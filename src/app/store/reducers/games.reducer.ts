import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from '../actions/books.actions';
import { Book } from '../../models/books';
import { IGame } from 'src/app/models/game';
import { GamesActions } from '../actions/games.actions';

export const initialState: ReadonlyArray<IGame> = [];

export const gamesReducer = createReducer(
  initialState,
  on(GamesActions.newGame, (_state, { game }) => [..._state, game])
);
