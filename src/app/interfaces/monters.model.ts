export interface Monster {
    id: number;
    name: string;
    type: string;
    species: string;
    description: string;
    elements: string[];
    aliments: string[];
    locations: string[];
    resistances: string[];
    weaknesses: { element: string; stars: number; condition: string | null }[];
    rewards: { 
      id: number; 
      item: { 
        id: number; 
        name: string; 
        description: string; 
        rarity: number; 
        carryLimit: number; 
        value: number; 
      }; 
      conditions: any[]; 
    }[];
  }