export class Perfil{
 public   id:string;
 public nombre:string ;
 public direccion:string;
 public fotoUrl : string;   

 constructor(id:string, nombre:string,direccion:string,fotoUrl:string){
     this.id  = id;
     this.nombre = nombre;
     this.direccion = direccion;
     this.fotoUrl = fotoUrl;
 }

}


 