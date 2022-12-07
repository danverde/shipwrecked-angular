import { Action, ActionReducer } from "@ngrx/store";
import { gameReducer, IGameState } from "./games.reducer";
import { IPlayerState, playerReducer } from "./player.reducer";

export interface IAppStore {
  game: IGameState;
  player: IPlayerState;
}

interface IStoreReducers {
  game: ActionReducer<IGameState, Action>;
  player: ActionReducer<IPlayerState, Action>;
}

export const initialStore: IStoreReducers = {
  game: gameReducer,
  player: playerReducer,
};