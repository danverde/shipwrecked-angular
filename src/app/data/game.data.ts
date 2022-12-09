import { GameStatus, IGame } from "../models/game.model";
import { GameDifficulty } from "../models/settings.model";

export const initialGame: IGame = {
  id: '',
  difficulty: GameDifficulty.Easy,
  day: 1,
}