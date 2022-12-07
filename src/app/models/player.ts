import { ICharacter } from "./character";

export interface IPlayer extends ICharacter {
  stamina: number;
  maxStamina: number;
  level: number;
  experience: number;
}