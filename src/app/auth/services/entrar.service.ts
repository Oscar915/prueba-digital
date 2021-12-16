import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import  usuarioJson   from '../../../assets/resources/usuario.json';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EntrarService {

  //Lista para verificar los usuarios registrados
  usuarios: Usuario[]=usuarioJson;

  //Toma el valor de la respuesta del login
  valor:any;
  


  constructor(private router:Router) { }

  login(dato: Usuario): Observable<Boolean> {
    this.valor=of(false)
     this.usuarios.forEach((usu) => {
       if((usu.username==dato.username)&&(usu.password==dato.password)){
         this.valor= of(true);
         localStorage.setItem("token",usu.username)
       }
     })

     return this.valor;
  }

  cerrarSesion(){
    localStorage.clear()
    this.router.navigateByUrl('auth/login')
  }

  comprobar():Observable<boolean> {
    return of(localStorage.getItem('token')!=null)
  }
}
