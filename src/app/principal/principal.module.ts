import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InicioComponent,
    ListarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
