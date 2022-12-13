import { createReducer, on } from '@ngrx/store';
import { initialMap } from 'src/app/data/map.data';

import { IMap } from 'src/app/models/map.model';
import { MapActions } from '../actions/map.actions';

export interface IMapState extends IMap { };

// export const initialState: IMapState = {} as IMapState;
export const initialState: IMapState = initialMap as IMapState;

export const mapReducer = createReducer(
  initialState,
  on(MapActions.setMap, (_state, { map }) => ({ ..._state, ...map }))
);
