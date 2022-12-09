export interface IGame {
  id: string;

  status: GameStatus;
  day: number;
  settings: any;
}

export enum GameStatus {
  win,
  loss,
  playing
}