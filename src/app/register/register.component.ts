import { Component } from '@angular/core';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from '../service/api/register.service';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TeamSelectionComponent, ReactiveFormsModule, FormsModule, CommonModule, HeaderComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  successfulForm: boolean = false;
  invalidForm: boolean = false;
  tier1CountryID: number = 0;
  tier2CountryID: number = 0;
  tier3CountryID: number = 0;
  tier4CountryID: number = 0;
  tier5CountryID: number = 0;


  // Form builder will search the form for value names(email, etc.), validate them and set them as required
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.registerForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      teamname: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  // This function will be used to add a red border if any input is invalid
  // control.invalid / dirty are properties of formControl. dirty means the user has changed the value, touched is if they'ved changed it but moved focus from it
  isControlInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    // Use this to disable register if any value invalid
    const isFieldInvalid: boolean = control ? control.invalid && (control.dirty || control.touched) : false;
    return isFieldInvalid;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.registerForm.valid) {

        const formData = {
          ...this.registerForm.value,
          country1: this.tier1CountryID,
          country2: this.tier2CountryID,
          country3: this.tier3CountryID,
          country4: this.tier4CountryID,
          country5: this.tier5CountryID
        };

        // Register on db with the form data
        this.registerService.registerTeam(formData).subscribe(response => {
          if (response.success) {
            // This will prompt user to confirm email
            this.successfulForm = true;
          }
        });
  

    } else {
      this.invalidForm = true
      console.error('Form is invalid');
    }
  }


  // This will update correctly based on the tier, takes the output sent from the team-selection team coponent
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
