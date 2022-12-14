import { GameDifficulty, ISettings } from "../models/settings.model";

export const easyGameSettings: ISettings = {
  gameSettings: {
    waitSuccessRate: 10000,
  },
  playerSettings: {
    expPerDay: 25,
    staminaPerDay: 3,
    initialStamina: 15,
    maxStamina: 20,
    initialHealth: 25,
    maxHealth: 25,
    healthGrowth: 1,
    attackGrowth: 1,
    defenseGrowth: 1,
  }
};

export const allSettings: { [key: number]: ISettings } = {
  [GameDifficulty.Easy]: easyGameSettings
}
