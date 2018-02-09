import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../_model/cliente';

@Injectable()
export class ClienteService {

  private url: string = 'http://localhost:3000/cliente';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(`${this.url}/listar`);
  }

  registrar(nombreCliente: string){
    let cliente: Cliente = new Cliente();
    cliente.nombreCompleto = nombreCliente;
    cliente.dni = '00000000';
    return this.http.post<Cliente>(`${this.url}/registrar`, cliente);
  }
}
