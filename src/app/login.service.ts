import { Injectable } from '@angular/core';
import { Login,LoginResponce } from './Login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  private baseUrl = 'http://localhost:3000/login';

  constructor(private httpClient: HttpClient) {}

  authUser(login: Login):Observable<LoginResponce>  {
    return this.httpClient.post(this.baseUrl, login);
  }
  isAuthenticated(): boolean{
    return localStorage.getItem('token') ? true : false
  }
}
