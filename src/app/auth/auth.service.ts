import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login (LoginRequest: LoginRequest): Observable<LoginResponse> 
  {
     return this.http.post<LoginResponse>(`${environment.baseUrl}api/Admin/Login`, LoginRequest);
       }     
}
