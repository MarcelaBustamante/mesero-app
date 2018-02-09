import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    logeado : boolean = false;
    
    constructor(private router:Router) {
    }

    login(){
        this.logeado = true;
        return this.logeado;
    }

    estaLogeado() {
        return this.logeado;
    }

    cerrarSesion() {
        this.logeado = false;
        //sessionStorage.removeItem("flagUser");
       // sessionStorage.removeItem("access_token");
        this.router.navigate(['login']);
    }
}