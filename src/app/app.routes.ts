import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { AccountComponent } from './account/account.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

// Initially redirect landing page to register
export const routes: Routes = [
    {path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    // {path: 'login', component: LoginComponent},
    {path: "leaderboard", component: LeaderboardComponent},
    // {path: 'account', component: AccountComponent},
    {path: "how-it-works", component: HowItWorksComponent}, 
];
