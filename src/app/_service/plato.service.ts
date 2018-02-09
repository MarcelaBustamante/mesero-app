import { Plato } from './../_model/plato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlatoService {
  platosCambio = new Subject<Plato[]>();

  private url: string = 'http://localhost:3000/plato';
  /*platos: Plato[] = [
    new Plato(1, 'Hamburguesa', 'https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg', 10),
    new Plato(2, 'Jugo de Naranja', 'http://cfxtras.com/wp-content/uploads/2016/04/el-jugo-de-naranja-ayuda-para-la-acidez.jpg', 5)
  ];*/

  constructor(private http: HttpClient) { }

  getPlatos() {
    //return this.platos;
    return this.http.get<Plato[]>(`${this.url}/listar/`); //Observable
  }

  getPlato(id: number) {
    return this.http.get<Plato>(`${this.url}/leer/${id}`);
  }

  agregarPlato(plato: Plato) {
    return this.http.post(`${this.url}/registrar/`, plato).subscribe(data => {      
      if (data === 1) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }

  actualizarPlato(plato: Plato) {
    this.http.put(`${this.url}/actualizar`, plato).subscribe(data => {      
      if (data === 1) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }

  eliminarPlato(plato: Plato) {        
    this.http.delete(`${this.url}/eliminar/${plato._id}`).subscribe(data => {            
      if(data === 1){
          this.getPlatos().subscribe(platos => {
              this.platosCambio.next(platos);
          });
      }
    });        
}
}
