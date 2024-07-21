import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AccountService } from '../service/api/account.service';
import { UserDTO } from '../interfaces/userDTO.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

  userDTO: UserDTO | null = null;

  constructor( private accountService: AccountService, private router: Router){};

  ngOnInit(): void {
    // Bug fixed, need to use next with subscribe to handle success data 
    this.accountService.getUserDetails().subscribe( {next: (data) => {
      this.userDTO = data;
    }, error: (e) => {
      console.error('Error fetching user details:', e);
    }
  })
  }

  logout(): void {
    this.accountService.logout().subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.success) {
          // navigate to login page
           this.router.navigate(['/login']);

        }
      },
      error: (error: any) => {
        console.error('Logout Error:', error);
      }
    });
  }


}
