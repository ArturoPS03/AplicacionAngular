export interface Resistances {
  fire: number;
  water: number;
  ice: number;
  thunder: number;
  dragon: number;
}

export interface Defense {
  base: number; 
  max: number;
  augmented: number;
}

export interface Armor {
  id: number;
  name: string;
  type: string;
  rank: string;
  rarity: number;
  defense: Defense;
  resistances: Resistances;
  slots: number[];
  armorSet: {
    id: number;
    name: string;
    rank: string;
  };
  crafting?: {
    materials: string[]; 
  };

}
