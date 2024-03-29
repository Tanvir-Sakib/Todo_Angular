import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormControl,ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { User } from '../User.interface';
import { Router, RouterModule, UrlSegment } from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    RouterModule,

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
  
})
export class SignupComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);

  isFormValid = false;

  errorMessageEmail = '';
  errorMessageUsername = '';
  errorMessagePassword = '';


  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router

  ) 
  {   
     merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessageEmail());

    merge(this.userName.statusChanges, this.userName.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessageUserName());

    merge(this.userName.statusChanges, this.userName.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessagePassword());
  }

  // userform = this.formBuilder.group({
  //   userName: ['', [Validators.required]],
  //   email: ['', [Validators.required, Validators.email]],
  //   passsword: ['', [Validators.required]],
    
  // });




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
      this.errorMessagePassword = 'Password Must be of 6 Character';
    } 
    else if (this.password.hasError('minlength')) {
      this.errorMessagePassword = 'Password Must be of 6 Character';
    } else {
      this.errorMessagePassword = '';
    }
    this.formValuesChange();
  }
  updateErrorMessageUserName() {
    if (this.userName.hasError('required')) {
      this.errorMessageUsername = 'You must enter a value';
    } else {
      this.errorMessageUsername = '';
    }
    this.formValuesChange();
  }

  formValuesChange(){
    if (this.errorMessageEmail != '' || this.errorMessagePassword != '' || this.errorMessageUsername != ''){
      this.isFormValid = false;
    }
    else{
      this.isFormValid = true;
    } 
  }



  // adduser() {
  //   this.userservice.adduser(this.userform.value as user).subscribe((res) => {
  //     this.router.navigateByUrl('/login');
  //   });
  // }

  onSubmit(){
    const user: User = {
      userName: this.userName.value!,
      email: this.email.value!,
      password: this.password.value!,
  };
    this.userservice.onSubmit(user).subscribe((res) => {
      this.router.navigateByUrl('/login');
    });
  }

}
