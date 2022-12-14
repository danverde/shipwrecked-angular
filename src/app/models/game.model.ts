import { GameDifficulty } from "./settings.model";

export interface IGame {
  id: string;
  difficulty: GameDifficulty;
  status: GameStatus;

  day: number;
}

export enum GameStatus {
  won,
  lost,
  playing
}