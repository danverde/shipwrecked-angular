import { ICharacter } from "./character";

export interface IScene {
    description: string;
    backgroundColor: string;
    traversable: boolean;
}

export interface ILocation {
    row: number;
    col: number;
    character: ICharacter | null;
    scene: IScene;
}

export interface IMap {
    // rows: number;
    // cols: number;
    locations: ILocation[][]
}