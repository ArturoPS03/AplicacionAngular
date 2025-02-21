export interface Event {
  id: number;
  name: string;
  platform: string;
  type: string;
  description: string;
  startTimestamp: string; 
  endTimestamp: string;
  requirements: string;
  questRank: number;
  successConditions: string;
  exclusive: string | null;
}