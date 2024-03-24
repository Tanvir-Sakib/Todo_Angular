import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'task-list', component:TaskListComponent},
  { path: 'task-details', component:TaskDetailsComponent},
  { path: 'details/:id', component:DetailsComponent},

];
