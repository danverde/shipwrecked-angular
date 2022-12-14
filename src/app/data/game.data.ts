import { GameStatus, IGame } from "../models/game.model";
import { GameDifficulty } from "../models/settings.model";

export const initialGame: IGame = {
  id: '1',
  difficulty: GameDifficulty.Easy,
  day: 1,
  status: GameStatus.playing
}