
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/api/countries'; 

  constructor(private http: HttpClient) { }

  // Fetch all country
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch and filter by tier
  getCountryByTier(tier: number): Observable<any[]> {
    // We use pipe in angular to transform data in observables
    const filteredCountries =  this.getAllCountries().pipe(
      map(countries => countries.filter(country => country.tier === tier).map(country => ({
        ...country,
        name: this.toTitleCase(country.name)
      })))
    ); 
    return filteredCountries
  }

  // Add logic for making countries title case
  private toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}