export interface LeaderboardDTO {
    teamName: string;
    countries: {
      country1: {name: string; totalPoints: number };
      country2: { name: string; totalPoints: number };
      country3: { name: string; totalPoints: number };
      country4: { name: string; totalPoints: number };
      country5: { name: string; totalPoints: number };
    };
    totalPoints: number;
    ranking: number;
  }