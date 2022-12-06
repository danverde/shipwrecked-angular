import { GameStatus, IGame } from "../models/game";

export const initialGame: IGame = {
  id: '',
  status: GameStatus.playing,
  day: 1,
  settings: null
}