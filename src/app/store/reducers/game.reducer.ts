import { createReducer, on } from '@ngrx/store';

import { IGame } from 'src/app/models/game.model';
import { GameActions } from '../actions/game.actions';

export interface IGameState extends IGame { };

export const initialState: IGameState = {} as IGameState;

export const gameReducer = createReducer(
  initialState,
  on(GameActions.newGame, (_state, { game }) => ({ ..._state, ...game }))
);
