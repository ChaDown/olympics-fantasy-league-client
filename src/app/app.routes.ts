import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

// Initially redirect landing page to register
export const routes: Routes = [
    {path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: "leaderboard", component: LeaderboardComponent},
    {path: "how-it-works", component: HowItWorksComponent}, 
];
