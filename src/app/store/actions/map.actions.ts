import { createActionGroup, props } from "@ngrx/store";
import { IMap } from "src/app/models/map.model";

export const MapActions = createActionGroup({
  source: 'Map',
  events: {
    'Set Map': props<{ map: IMap }>(),
  },
});