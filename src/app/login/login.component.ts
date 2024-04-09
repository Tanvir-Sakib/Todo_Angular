import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { loginService } from '../login.service';
import { Login,LoginResponce } from '../Login.interface';
import { Router, RouterModule, UrlSegment } from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);

  isFormValid = false;

  errorMessageEmail = '';
  errorMessagePassword = '';


  constructor(
    private loginService: loginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) 
  {   
     merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessageEmail());

    merge(this.password.statusChanges, this.password.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessagePassword());
  }

  updateErrorMessageEmail() {
    if (this.email.hasError('required')) {
      this.errorMessageEmail = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessageEmail = 'Not a valid email';
    } else {
      this.errorMessageEmail = '';
    }
    this.formValuesChange();
  }

  updateErrorMessagePassword() {
    if (this.password.hasError('required')) {
      this.errorMessagePassword = 'Enter Your Password';
    } 
    else if (this.password.hasError('minlength')) {
      this.errorMessagePassword = 'Enter Your Password';
    } else {
      this.errorMessagePassword = '';
    }
    this.formValuesChange();
  }

  formValuesChange(){
    if (this.errorMessageEmail != '' || this.errorMessagePassword != ''){
      this.isFormValid = false;
    }
    else{
      this.isFormValid = true;
    } 
  }

  loginResponce: LoginResponce = {};

  authUser(){
    const login: Login = {
      email: this.email.value!,
      password: this.password.value!,
  };
    this.loginService.authUser(login).subscribe(async (res) => {
      this.loginResponce = res;
      localStorage.setItem("token", this.loginResponce.token??'');
      if(this.loginResponce.success){
        this.router.navigateByUrl("/task-list");
      }
      else{
        this.snackBar.open('Invalide User-Name or Password','Got It' ,{
          duration: 3000
        });
      }
    });
  }

  navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }

}
