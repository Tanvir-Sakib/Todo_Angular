import { Component, Input, OnInit } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskService } from '../task.service';
import { Task } from '../Task.interface';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {Params, Router, RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TaskDetailsComponent , MatButtonModule , MatIconModule, MatInputModule , MatFormFieldModule , FormsModule , RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent{
  @Input() id = '';

  // task!: Task;
  task: Task = {
    _id: '',
    title: '',
    description: '',
    category: 'Work',
    status: 'TODO',
    date: new Date(),
    priority: 'low', 
};

  constructor(private taskService: TaskService, private router: Router , private route: ActivatedRoute ) {}


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTask(this.id).pipe(take(1)).subscribe((res) => {
      this.task = res;
    });
  }
  
  deleteTask(id: string) {
    this.router.navigateByUrl('/task-list');
  }
  navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }
}
