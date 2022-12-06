import { ICharacter } from "./character";

export interface IPlayer extends ICharacter {
  hunger: number;
  hungerLimit: number;
  level: number;
  experience: number;
}