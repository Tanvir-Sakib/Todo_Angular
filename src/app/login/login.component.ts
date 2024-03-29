import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ MatInputModule, MatButtonModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  
})
export class LoginComponent {

  constructor(private router: Router) {}

  navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }

}
