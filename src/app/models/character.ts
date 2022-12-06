import { IInventory } from "./inventory";

export interface ICharacter {
  img: string;
  name: string;
  maxHealth: number;
  health: number;
  move: number;
  baseAttack: number;
  baseDefense: number;
  status: CharacterStatus;
  inventory: IInventory;
  // position: any;
  // col: number;
  // row: number;
};

export enum CharacterStatus {
  dead = 0,
  alive = 1,
}