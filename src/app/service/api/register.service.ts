import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8000/api/auth/register'; 
  // Inject the http client
  constructor(private http: HttpClient) { }

  registerTeam(teamData: any): Observable<any> {
    return this.http.post(this.apiUrl, teamData)
  }
}
