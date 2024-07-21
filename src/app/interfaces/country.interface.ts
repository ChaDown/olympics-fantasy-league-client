export interface CountryPoints {
    name: string;
    totalPoints: number;
  }

export interface Country {
    id: number;
    name: string;
    gold: number;
    silver: number;
    bronze: number;
    tier: number;
    participants: number;
    totalPoints?: number; 
}
