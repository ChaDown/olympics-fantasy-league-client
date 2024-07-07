import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../../interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth/login'; 
  // Inject the http client
  constructor(private http: HttpClient) { }

  // login(loginDetails: LoginDetails): Observable<any> {
  //   // { observe: 'response', responseType: 'text' } is used to get the full response as observable
  //   this.http.post(this.apiUrl, loginDetails);
  // }

  login(loginDetails: LoginDetails): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.apiUrl, loginDetails, { observe: 'response'});
  }
}
