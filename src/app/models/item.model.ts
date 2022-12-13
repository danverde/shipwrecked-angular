export interface IItem {
  name: string;
  description: string;
  droppable: boolean;
  itemType: ItemType;
}

export enum ItemType {
  resource,
  weapon,
  armor,
  food
}