import { IItem } from "./item.model";

export interface IInventory {
  activeWeapon: any;
  activeArmor: any;
  items: IItem[];
}