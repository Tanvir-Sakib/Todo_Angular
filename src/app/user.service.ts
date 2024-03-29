import { Injectable } from '@angular/core';
import { User } from './User.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}

  getAlluser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  onSubmit(user: User) {
    return this.httpClient.post(this.baseUrl, user);
  }
}
