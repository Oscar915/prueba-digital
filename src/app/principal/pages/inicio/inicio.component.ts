import { Component, OnInit } from '@angular/core';
import { EntrarService } from 'src/app/auth/services/entrar.service';


//assets
import viajes from '../../../../assets/resources/viajes.json'


//Modelos 
import { Viaje } from '../../models/viaje';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {



  //Lista de viajes registrados
  viajes: Viaje[]=viajes;


  constructor(private entrar: EntrarService) { }

  ngOnInit(): void {
    
  }

  agregar(dato: Viaje): void {
    this.viajes.push(dato)
  }

  cerrar(){
    this.entrar.cerrarSesion();
  }

  

}
