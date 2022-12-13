import { CharacterStatus } from "../models/character.model";
import { IPlayer } from "../models/player.model";

export const initialPlayer: IPlayer = {
  spriteImg: '/assets/sprites/man/man.gif',
  profileImg: '/assets/geirk.png',
  name: 'Geirk',
  maxHealth: 20,
  health: 20,
  move: 1,
  baseAttack: 1,
  baseDefense: 1,
  status: CharacterStatus.alive,
  inventory: {
    activeArmor: null,
    activeWeapon: null,
    items: []
  },

  stamina: 15,
  maxStamina: 20,
  level: 1,
  experience: 0
};
