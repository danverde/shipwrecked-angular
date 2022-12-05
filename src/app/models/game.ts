export interface IGame {
  id: string;

  status: GameStatus;
  day: number;
  settings: any;
}

export type GameStatus = 'win' | 'loss' | 'setup' | 'exit';

/*

public Player Player { get; set; }
        public int Day { get; set; }
        public Fire Fire { get; set; }
        public GameStatus Status { get; set; }
        public string StatusDescription { get; set; }
        public Map.Map Map { get; set; }
        public GameSettings GameSettings { get; set; }
        public string SaveFileName { get; set; }

*/