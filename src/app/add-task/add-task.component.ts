import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TaskService } from '../task.service';
import { Task } from '../Task.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule,
    
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddTaskComponent {
  categoriesOfTask = ['Work', 'Study', 'Self' , 'Good To Do'];
  title: any;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {}
  taskForm = this.formBuilder.group({
    title: '',
    assignTo: '',
    description: '',
    category: '',
    date: '',
    priority: '',
  });

  addTask() {
    this.taskService.addTask(this.taskForm.value as Task).subscribe((res) => {
      this.router.navigateByUrl('/task-list');
    });
  }
  navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
  
}
