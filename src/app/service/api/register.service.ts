import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/api/auth/register'; 
  // Inject the http client
  constructor(private http: HttpClient) { }

  registerTeam(teamData: any): void {
    this.http.post(this.apiUrl, teamData).subscribe(response => {
      console.log(response);
    });
  }
}
