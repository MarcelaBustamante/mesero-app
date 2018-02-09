import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsumoService{        
    private url: string = 'http://localhost:3000/consumo/registrar';

    constructor(private http: HttpClient){        
    }    
    
    registrar(pedido: any){
        return this.http.post(this.url, pedido);
    }
    
}