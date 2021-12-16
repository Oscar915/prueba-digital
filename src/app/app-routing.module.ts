import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtegerRutaGuard } from './guards/proteger-ruta.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
   

  },
  {
    path: '', 
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule),
    canActivate:[ProtegerRutaGuard],
    canLoad: [ProtegerRutaGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
