import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../interfaces/userDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = "http://localhost:8080/api/auth/isUserLoggedIn"; 

  constructor(private http: HttpClient) { }

  // Fetch all country
  getUserDetails(): Observable<UserDTO> {
    return this.http.get<UserDTO>(this.apiUrl, {withCredentials: true});
  }

  // With credentials fixed issue or not working
  logout(): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/logout', { withCredentials: true });
  }
}