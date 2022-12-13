import { Action, ActionReducer } from "@ngrx/store";
import { ImportState } from "@ngrx/store-devtools/src/actions";
import { gameReducer, IGameState } from "./game.reducer";
import { IMapState, mapReducer } from "./map.reducer";
import { IPlayerState, playerReducer } from "./player.reducer";

export interface IAppStore {
  game: IGameState;
  player: IPlayerState;
  map: IMapState;
}

interface IStoreReducers {
  game: ActionReducer<IGameState, Action>;
  player: ActionReducer<IPlayerState, Action>;
  map: ActionReducer<IMapState, Action>;
}

export const initialStore: IStoreReducers = {
  game: gameReducer,
  player: playerReducer,
  map: mapReducer
};