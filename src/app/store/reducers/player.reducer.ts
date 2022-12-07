import { createReducer, on } from "@ngrx/store";
import { initialPlayer } from "src/app/data/player";
import { IPlayer } from "src/app/models/player";
import { PlayerActions } from "../actions/player.actions";

export interface IPlayerState extends IPlayer { };

// TODO initial state should be empty
export const initialState: IPlayerState = initialPlayer as IPlayerState;

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.newPlayer, (_state, { player }) => ({ ..._state, ...player }))
);