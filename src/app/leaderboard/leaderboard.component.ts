import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../service/api/leaderboard.service';
import { LeaderboardDTO } from '../interfaces/leaderboard.interface';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  styleUrls: ['./leaderboard.component.scss']
})

export class LeaderboardComponent implements OnInit {
  leaderboard: LeaderboardDTO[] = [];
  expandedTeam: string | null = null;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.leaderboardService.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
    });
  }

  toggleExpand(teamName: string): void {
    if (this.expandedTeam === teamName) {
      this.expandedTeam = null;
    } else {
      this.expandedTeam = teamName;
    }
  }
}

