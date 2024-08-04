export interface LeaderboardDTO {
    teamName: string;
    countries: {
      country1: {flagEmoji: string; name: string; totalPoints: number };
      country2: {flagEmoji: string;  name: string; totalPoints: number };
      country3: {flagEmoji: string;  name: string; totalPoints: number };
      country4: {flagEmoji: string;  name: string; totalPoints: number };
      country5: {flagEmoji: string;  name: string; totalPoints: number };
    };
    totalPoints: number;
    ranking: number;
  }