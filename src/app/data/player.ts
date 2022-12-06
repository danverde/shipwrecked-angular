import { CharacterStatus } from "../models/character";
import { IPlayer } from "../models/player";

export const initialPlayer: IPlayer = {
  img: 'general.png',
  name: '',
  maxHealth: 25,
  health: 15,
  move: 1,
  baseAttack: 1,
  baseDefense: 1,
  status: CharacterStatus.alive,
  inventory: {
    activeArmor: null,
    activeWeapon: null,
    items: []
  },

  hunger: 5,
  hungerLimit: 20,
  level: 1,
  experience: 0
};

export const player: IPlayer = {
  img: 'general.png',
  name: 'Vanessa',
  maxHealth: 100,
  health: 60,
  move: 1,
  baseAttack: 1,
  baseDefense: 1,
  status: CharacterStatus.alive,
  inventory: {
    activeArmor: null,
    activeWeapon: null,
    items: []
  },

  hunger: 5,
  hungerLimit: 20,
  level: 10,
  experience: 0
};