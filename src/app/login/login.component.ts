import { LoginService } from './../_service/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  constructor(private router:Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  iniciarSesion(form: NgForm){   
    this.loginService.login();
    this.router.navigate(['plato']);
  }


}
