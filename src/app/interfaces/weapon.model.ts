export interface Attack {
  display?: number; 
  raw?: number;   
}

export interface Weapon {
  id: number;
  name: string;
  type: string; 
  rarity: number; 
  attack: Attack; 
  elements?: string[];
  crafting?: {
    materials: string[];
  };
 
}
