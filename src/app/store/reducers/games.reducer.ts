import { createReducer, on } from '@ngrx/store';

import { IGame } from 'src/app/models/game';
import { GamesAction } from '../actions/games.actions';

export const initialState: IGame = {} as IGame;

export const gameReducer = createReducer(
  initialState,
  on(GamesAction.newGame, (_state, { game }) => ({ ..._state, ...game }))
);
