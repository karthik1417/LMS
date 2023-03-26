import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public _authService:AuthService,public service:CommonserviceService,private router: Router, ) { }
  username:any
  passworD:any
  ngOnInit(): void {
  }
  loginFn(){
    if(this.username == 'admin' && this.passworD == 'admin@123'){
        localStorage.setItem('username',this.username)
        localStorage.setItem('pass',this.passworD)
        this.router.navigate(["table-view"]);
      } else if(this.username && this.passworD == 'user@123'){
        localStorage.setItem('username',this.username)
        localStorage.setItem('pass',this.passworD)
        this.router.navigate(["add-edit-page"]);
      } else {
        alert("Incorrect Username or Password");
      }
    }
}

