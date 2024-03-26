import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { user } from '../User.interface';
import { Router, RouterModule } from '@angular/router';

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

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router
  ) {}
  userform = this.formBuilder.group({
    userName: '',
    email: '',
    passsword: '',
  });

  adduser() {
    this.userservice.adduser().subscribe((res) => {
      this.router.navigateByUrl('/login');
    });
  }

}
