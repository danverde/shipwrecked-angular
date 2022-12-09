export enum GameDifficulty {
  Easy,
}

export interface ISettings {
  gameSettings: IGameSettings;
  playerSettings: IPlayerSettings;
};

export interface IGameSettings {
  waitSuccessRate: number;
}

export interface IPlayerSettings {
  expPerDay: number;
  staminaPerDay: number;
  initialStamina: number;
  maxStamina: number;
  initialHealth: number;
  maxHealth: number;
  healthGrowth: number;
  attackGrowth: number;
  defenseGrowth: number;
}

/* 
  public int WaitSuccessRate { get; set; }

  public int BaseExpPerDay { get; set; }
  public int HungerPerDay { get; set; }
  public int InitialHunger { get; set; }
  public int HealthGrowth { get; set; } 
  public int AttackGrowth { get; set; } 
  public int DefenseGrowth { get; set; } 
  public int MaxHunger { get; set; }
*/