import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( private router: Router,private loginService: LoginService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  cerrarSesion(){
    this.loginService.cerrarSesion();
  }
miPerfil(){
  
  console.log(this.route);
  this.router.navigate(['perfil'],{ relativeTo: this.route });
}
}
