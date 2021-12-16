import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../models/viaje';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  @Input() viajes:Viaje[]=[];

  
  constructor() { }

  ngOnInit(): void {
  }

}
