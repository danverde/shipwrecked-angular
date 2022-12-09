import { createActionGroup, props } from "@ngrx/store";
import { IPlayer } from "src/app/models/player.model";

export const PlayerActions = createActionGroup({
  source: 'Player',
  events: {
    'New Player': props<{ player: IPlayer }>()
  }
});