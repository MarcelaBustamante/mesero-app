import { PerfilService } from './../_service/perfil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Perfil } from '../_model/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  id:string;
  perfil:Perfil;

  constructor(private perfilService:PerfilService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.id='5a720c079d413298a6ca9145';//harcodeo hasta definir requerimiento
   /* this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id']; //es el que esta definido en el routing
        console.log(this.id);

        this.perfilService.getPerfil(this.id).subscribe(data => {
          this.perfil = data;
          console.log(this.perfil);
        });        */
        this.perfilService.getPerfil(this.id).subscribe(data => {
          this.perfil = data;

      }
    )
  }

  editarPerfil(){
    console.log(this.route);
    this.router.navigate([`editar/${this.id}`], { relativeTo: this.route });
  }

}
