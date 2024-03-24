import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,

  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
  
})
export class SignupComponent {

}
