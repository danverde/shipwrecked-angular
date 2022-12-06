import { IItem } from "./item";

export interface IInventory {
  activeWeapon: any;
  activeArmor: any;
  items: IItem[];
}