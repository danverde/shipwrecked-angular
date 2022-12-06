import { createReducer, on } from "@ngrx/store";
import { IPlayer } from "src/app/models/player";
import { PlayerActions } from "../actions/player.actions";

export const initialState: IPlayer = {} as IPlayer;

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.newPlayer, (_state, { player }) => ({ ..._state, ...player }))
);