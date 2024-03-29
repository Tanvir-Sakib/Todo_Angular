import { Injectable } from '@angular/core';
import { Task } from './Task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/task/';

  constructor(private httpClient: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  getTask(id: string): Observable<Task> {
    return this.httpClient.get<Task>(this.baseUrl + '/' + id);
  }

  addTask(payload: Task) {
    return this.httpClient.post(this.baseUrl, { ...payload, status: 'TODO' });
  }

  deleteTask(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

  updateTask(id: string, updatedTask: Task) {
    return this.httpClient.put(this.baseUrl + '/' + id, updatedTask);
  }
}
