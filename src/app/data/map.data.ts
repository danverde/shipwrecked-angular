import { ILocation, IMap, IScene } from "../models/map.model";
import { initialPlayer } from "./player";

const ocean: IScene = {
  description: 'The ocean',
  backgroundColor: 'blue',
  traversable: false
};

const beach: IScene = {
  description: 'A beach',
  backgroundColor: 'brow',
  traversable: true
};

const forest: IScene = {
  description: 'A dense forest',
  backgroundColor: 'green',
  traversable: true
};

const mountain: IScene = {
  description: 'A high mountain',
  backgroundColor: 'gray',
  traversable: true
};

const town: IScene = {
  description: 'A town',
  backgroundColor: 'purple',
  traversable: true
};

const locations: ILocation[][] = [
  [{
    row: 0,
    col: 0,
    character: null,
    scene: forest
  },
  {
    row: 0,
    col: 1,
    character: initialPlayer,
    scene: forest
  },
  {
    row: 0,
    col: 2,
    character: null,
    scene: forest
  }],
  [{
    row: 1,
    col: 0,
    character: null,
    scene: forest
  },
  {
    row: 1,
    col: 1,
    character: null,
    scene: forest
  },
  {
    row: 1,
    col: 2,
    character: null,
    scene: forest
  }],
  [{
    row: 2,
    col: 0,
    character: null,
    scene: forest
  },
  {
    row: 2,
    col: 1,
    character: null,
    scene: town
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