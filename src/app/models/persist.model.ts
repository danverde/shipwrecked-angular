import { IGame } from "./game.model";
import { IMap } from "./map.model";
import { IPlayer } from "./player.model";

export interface IPackedGame {
  game: IGame;
  map: IMap;
  player: IPlayer
}