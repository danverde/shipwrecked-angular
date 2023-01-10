import { createReducer, on } from '@ngrx/store';

import { IGame } from 'src/app/models/game.model';
import { GameActions } from '../actions/game.actions';

export interface IGameState extends IGame { };

export const initialState: IGameState = {} as IGameState;

export const gameReducer = createReducer(
  initialState,
  on(GameActions.setGame, setGame),
  on(GameActions.endGame, endGame)
);

function setGame(_state: IGameState, { game }: { game: IGame }): IGameState {
  return {
    ..._state,
    ...game,
  }
}

function endGame(_state: IGameState): IGameState {
  return {} as IGameState;
}