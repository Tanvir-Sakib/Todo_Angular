import { Injectable } from '@angular/core';
import { Task } from './Task.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/task/';

  constructor(private httpClient: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl,  { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  getTask(id: string): Observable<Task> {
    return this.httpClient.get<Task>(this.baseUrl + '/' + id, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  addTask(payload: Task) {
    return this.httpClient.post(this.baseUrl, { ...payload, status: 'TODO' }, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  deleteTask(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  updateTask(id: string, updatedTask: Task) {
    return this.httpClient.put(this.baseUrl + '/' + id, updatedTask, { headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }
}
