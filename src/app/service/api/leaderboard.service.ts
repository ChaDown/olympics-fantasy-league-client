import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaderboardDTO } from '../../interfaces/leaderboard.interface';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  
  private apiUrl = 'https://cold-lacie-olympic-fantasy-league-fb696b84.koyeb.app/api/leaderboard'; 

  constructor(private http: HttpClient) {}

  getLeaderboard(): Observable<LeaderboardDTO[]> {
    return this.http.get<LeaderboardDTO[]>(this.apiUrl);
  }
}
