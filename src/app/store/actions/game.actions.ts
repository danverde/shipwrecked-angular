import { createActionGroup, props } from "@ngrx/store";
import { IGame } from "src/app/models/game.model";

export const GameActions = createActionGroup({
  source: 'Games',
  events: {
    'New Game': props<{ game: IGame }>(),
    'End Game': props<{ gameId: string }>(),
  },
});