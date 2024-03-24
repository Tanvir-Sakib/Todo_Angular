import { Component, OnInit } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskService } from '../task.service';
import { Task } from '../Task.interface';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {Params, RouterModule} from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TaskDetailsComponent , MatButtonModule , MatIconModule, MatInputModule , MatFormFieldModule , FormsModule , RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent{
  allTasks: Task[] = [];
  id!: string;

  constructor(private taskService: TaskService) {}


  ngOnInit() {
    this.taskService.getAllTasks().pipe(take(1)).subscribe((res) => {
      this.allTasks = res;
      console.log(this.allTasks);
    });
  }
  
  deleteTask(id: string) {
    this.allTasks = this.allTasks.filter((task) => task.id !== id);
  }
}
