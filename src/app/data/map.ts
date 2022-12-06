import { ILocation, IMap, IScene } from "../models/map";
import { player } from "./player";

const ocean: IScene = {
  description: 'The ocean',
  backgroundColor: 'blue',
  traversable: false
};

const locations: ILocation[][] = [
  [{
    row: 0,
    col: 0,
    character: null,
    scene: ocean
  },
  {
    row: 0,
    col: 1,
    character: null,
    scene: ocean
  },
  {
    row: 0,
    col: 2,
    character: null,
    scene: ocean
  }],
  [{
    row: 1,
    col: 0,
    character: null,
    scene: ocean
  },
  {
    row: 1,
    col: 1,
    character: null,
    scene: ocean
  },
  {
    row: 1,
    col: 2,
    character: player,
    scene: ocean
  }],
  [{
    row: 2,
    col: 0,
    character: null,
    scene: ocean
  },
  {
    row: 2,
    col: 1,
    character: null,
    scene: ocean
  },
  {
    row: 2,
    col: 2,
    character: null,
    scene: ocean
  }]
]

export const map: IMap = {
  locations
};