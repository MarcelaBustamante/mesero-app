import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../_model/perfil';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class PerfilService {
  private url: string = 'http://localhost:3000/tienda';
  perfilCambio = new Subject<Perfil>();
  constructor(private http: HttpClient, private router: Router) { }

  getPerfil(id: string) {
    return this.http.get<Perfil>(`${this.url}/leer/${id}`);
  }

  actualizarPerfil(perfil: Perfil) {
    this.http.put(`${this.url}/actualizar`, perfil).subscribe(data => {
      if (data === 1) {
        this.getPerfil(perfil.id).subscribe(perfil => {
          this.perfilCambio.next(perfil);
        });
      }
    });

  }
}

