import { Component } from '@angular/core';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../service/api/register.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TeamSelectionComponent, ReactiveFormsModule, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  // Use this to conditionally display a message if passwords dont match
  passwordMismatch: boolean = false;
  tier1CountryID: number = 0;
  tier2CountryID: number = 0;
  tier3CountryID: number = 0;
  tier4CountryID: number = 0;
  tier5CountryID: number = 0;

  // Form builder will search the form for value names(email, etc.), validate them and set them as required
  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      teamname: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  // Handle form submission
  onSubmit(): void {
    if (this.registerForm.valid) {
      // Seperate these values from the form, so confirmPassword is not sent to the API
      const { password, confirmPassword, ...formValues } = this.registerForm.value;
      // check if the passwords match
      if (password !== confirmPassword) {
        this.passwordMismatch = true;
        return;
      } else {
        this.passwordMismatch = false;
        const formData = {
          ...formValues,
          password: password,
          country1: this.tier1CountryID,
          country2: this.tier2CountryID,
          country3: this.tier3CountryID,
          country4: this.tier4CountryID,
          country5: this.tier5CountryID
        };
        console.log('Form Data:', formData);
        // Register on db with the form data
        this.registerService.registerTeam(formData);

      }
    } else {
      console.error('Form is invalid');
    }
  }


  // This will update correctly based on the tier
  handleCountrySelection(event: { tier: number, countryID: number }): void {
    switch (event.tier) {
      case 1:
        this.tier1CountryID = event.countryID;
        break;
      case 2:
        this.tier2CountryID = event.countryID;
        break;
      case 3:
        this.tier3CountryID = event.countryID;
        break;
      case 4:
        this.tier4CountryID = event.countryID;
        break;
      case 5:
        this.tier5CountryID = event.countryID;
      console.log(this.tier1CountryID, this.tier2CountryID, this.tier3CountryID, this.tier4CountryID, this.tier5CountryID);
        break;
      default:
        console.error('InvaliD tier:', event.tier);
        break;
    }
}
}
