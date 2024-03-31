import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task.interface';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../task.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule , MatCardModule , RouterModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent {
  @Input()
  task!: Task;

  @Output()
  taskDeleted: EventEmitter<string> = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}

  markAsDone() {
    this.taskService
      .updateTask(this.task._id || '', {
        ...this.task,
        status: 'DONE',
      })
      .subscribe((res) => (this.task = res));
  }

  deleteTask() {
    this.taskService.deleteTask(this.task._id || '').subscribe({
      next: () => {
        this.taskDeleted.emit(this.task._id);
      },
      error: (err) => {
        this.snackBar.open('Something went wrong');
        console.log(err);
      },
    });
  }
}
