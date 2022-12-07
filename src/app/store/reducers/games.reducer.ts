import { createReducer, on } from '@ngrx/store';

import { IGame } from 'src/app/models/game';
import { GamesAction } from '../actions/games.actions';

export interface IGameState extends IGame { };

export const initialState: IGameState = {} as IGameState;

export const gameReducer = createReducer(
  initialState,
  on(GamesAction.newGame, (_state, { game }) => ({ ..._state, ...game }))
);
