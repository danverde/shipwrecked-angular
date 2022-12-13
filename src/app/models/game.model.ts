import { GameDifficulty } from "./settings.model";

export interface IGame {
  id: string;
  difficulty: GameDifficulty;

  day: number;
}

export enum GameStatus {
  win,
  loss,
  playing
}