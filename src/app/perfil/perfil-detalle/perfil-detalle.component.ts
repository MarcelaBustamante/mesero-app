import { PerfilService } from './../../_service/perfil.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Perfil } from '../../_model/perfil';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.component.html',
  styleUrls: ['./perfil-detalle.component.css']
})
export class PerfilDetalleComponent implements OnInit {
  id: string;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private perfilService: PerfilService, private router: Router) {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'urlImagen': new FormControl(''),
      'direccion': new FormControl('')
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      //console.log(this.id);
      this.initForm();
    }
    );
  }
  private initForm() {

    this.perfilService.getPerfil(this.id).subscribe(data => {

      let id = '';
      let nombre = '';
      let urlImagen = '';
      let direccion = '';

      id = data.id;
      nombre = data.nombre;
      urlImagen = data.fotoUrl;
      direccion = data.direccion;

      this.form = new FormGroup({
        'id': new FormControl(id),
        'nombre': new FormControl(nombre),
        'urlImagen': new FormControl(urlImagen),
        'direccion': new FormControl(direccion)
      });
    });

  }

  cambiar() {
    let nuevoPerfil = new Perfil(this.id, this.form.value['nombre'], this.form.value['urlImagen'], this.form.value['direccion']);
    console.log(nuevoPerfil);
    this.perfilService.actualizarPerfil(nuevoPerfil);
    this.router.navigate(['perfil'], { relativeTo: this.route });

   
  }

}
