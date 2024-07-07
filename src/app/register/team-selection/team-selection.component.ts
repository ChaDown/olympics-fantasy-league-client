// team-selection.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryService } from '../../service/api/countries.service'; 
import { CommonModule, NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule],
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit {
  @Input() tier!: number; // Input to determine tier, we use ! because we know its not undefined, 1,2,3,4,5 is entered in the html
  @Output() selectedCountryID = new EventEmitter<{tier: number, countryID: number}>(); // Output to emit the selected country ID, this is how we send data up to the parent component

  countries: any[] = [];

  // Here the service is injected
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    if (this.tier != undefined) {
    this.fetchCountriesByTier(this.tier);}
  }

  fetchCountriesByTier(tier: number): void {
    this.countryService.getCountryByTier(tier).subscribe(countries => {
    this.countries = countries;
    // Emit the first country, in case user doesn't change the country to trigger the event
    this.selectedCountryID.emit({tier: this.tier, countryID: this.countries[0].id});
    })
       
  }

  // The method for outputting the value, will get the event and draw the fvalue from the event
  selectCountry(event: Event): void {
    // Get the value as a string, pass it to the int
    const countryID = parseInt((event.target as HTMLSelectElement).value);
    this.selectedCountryID.emit({tier: this.tier, countryID: countryID});
  }
}

