import { Component } from '@angular/core';
import { TaskTitleComponent } from '../task-title/task-title.component';
import { TaskService } from '../task.service';
import { Task } from '../Task.interface';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskTitleComponent , MatButtonModule , MatIconModule, MatInputModule , MatFormFieldModule , FormsModule, RouterModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  allTasks: Task[] = [];
  value = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskService.getAllTasks().pipe(take(1)).subscribe((res) => {
      this.allTasks = res;
      console.log(this.allTasks);
    });
  }

  valuechange() {

    console.log(this.value)
  }

  navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }
}
