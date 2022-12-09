import { ICharacter } from "./character.model";

export interface IPlayer extends ICharacter {
  stamina: number;
  maxStamina: number;
  level: number;
  experience: number;
}