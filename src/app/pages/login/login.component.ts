import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= '';
  password= '';
  errorMessage ='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if(this.email === 'root' && this.password === 'root') 
    {
        this.router.navigate(['cv']);
    } else {
      this.errorMessage = 'email or password incorrect';
    }
  }

}
