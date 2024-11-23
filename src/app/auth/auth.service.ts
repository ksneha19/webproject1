import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private _authStatus = new BehaviorSubject<boolean> (false);
  public authStatus = this._authStatus.asObservable()
  private isAuthenticated() : boolean{
    return localStorage.getItem("comp584sk")!= null;
  }
  getToken(): string | null {
   return localStorage.getItem("comp584sk");
  }
  private setAuthstatus(isAuthenticated: boolean) : void{
    this._authStatus.next(isAuthenticated);
  }

  

  login (LoginRequest: LoginRequest): Observable<LoginResponse> 
  {
     return this.http.post<LoginResponse>(`${environment.baseUrl}api/Admin/Login`, LoginRequest)
     .pipe(tap(loginResult => {
      if (loginResult.success){
        localStorage.setItem ("comp584sk",loginResult.token);
        this.setAuthstatus(true);
     }
  }));
  } 
  logout()
  {
    localStorage.removeItem("comp584sk");
    this.setAuthstatus(false);
  }

}
