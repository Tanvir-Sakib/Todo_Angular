import { Injectable } from '@angular/core';
import { user } from './User.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}

  getAlluser(): Observable<user[]> {
    return this.httpClient.get<user[]>(this.baseUrl);
  }

  adduser() {
    return this.httpClient.post(this.baseUrl,{});
  }
}
