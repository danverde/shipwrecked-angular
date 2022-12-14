import { createReducer, on } from "@ngrx/store";
import { initialPlayer } from "src/app/data/player.data";
import { IPlayer } from "src/app/models/player.model";
import { PlayerActions } from "./player.actions";

export interface IPlayerState extends IPlayer { };

// TODO initial state should be empty
export const initialState: IPlayerState = initialPlayer as IPlayerState;

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.setPlayer, (_state, { player }) => ({ ..._state, ...player }))
);