
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Viaje } from '../../models/viaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

   //Formulario para agregar un viaje
   viajeForm!: FormGroup;
   fecha: any= new Date()

   @Output() onNuevoViaje : EventEmitter<Viaje>= new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.viajeForm = this.fb.group({
      ubicacion: ['',Validators.required],
      llegada: [ ,Validators.required],
      salida: ['',Validators.required],
      pasajeros: ['',Validators.required],
    })
  }

  agregar(): void {

    if(this.viajeForm.valid){
       this.onNuevoViaje.emit(this.viajeForm.value)
      this.viajeForm.controls['ubicacion'].setValue('')
      this.viajeForm.controls['llegada'].setValue('')
      this.viajeForm.controls['salida'].setValue('')
      this.viajeForm.controls['pasajeros'].setValue('')
    }else{
      alert('Llene todos los campos')
    }
    
  }

}
