import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/api/login.service';
import { HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login.interface';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  loginForm: FormGroup;
  loginFailed: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // loginForm above will assing a value object, being the email and password validated above. 
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login Response:', response);
          if (response.ok) {
            this.loginFailed = false;
            // navigate to my account page
            this.router.navigate(['/account']);

          } else {
            this.loginFailed = true;
          }
        },
        error: (error: any) => {
          console.error('Login Error:', error);
          this.loginFailed = true;
        }
      });
    }
  }

}
