import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/api/login.service';
import { HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  loginForm: FormGroup;
  loginFailed: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log('Login Response:', response);
          if (response.body.success) {
            this.loginFailed = false;
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
