import { GameStatus, IGame } from "../models/game.model";

export const initialGame: IGame = {
  id: '',
  status: GameStatus.playing,
  day: 1,
  settings: null
}