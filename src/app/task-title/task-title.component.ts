import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task.interface';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from '../task.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-tile',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule , MatCardModule , RouterModule],
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.scss',
})
export class TaskTitleComponent {
  @Input()
  task!: Task;

  // @Output()
  // taskDeleted: EventEmitter<string> = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private snackBar: MatSnackBar,
  ) {}

}
