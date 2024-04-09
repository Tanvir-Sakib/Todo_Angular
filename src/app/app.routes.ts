import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from './authguard.service';

export const routes: Routes = [
  { path: "",redirectTo: "login",pathMatch: 'full'},
  { path: 'add-task', component: AddTaskComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'task-list', component:TaskListComponent, canActivate: [AuthGuardService] },
  { path: 'task-details', component:TaskDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'details/:id', component:DetailsComponent, canActivate: [AuthGuardService] },

];
