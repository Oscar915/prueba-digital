import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { EntrarService } from '../auth/services/entrar.service';

@Injectable({
  providedIn: 'root'
})
export class ProtegerRutaGuard implements CanActivate, CanLoad {

  constructor(private entrar: EntrarService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.entrar.comprobar().pipe(
      tap(valid => {
        if (!valid) {
          this.router.navigateByUrl('auth/inicio')
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.entrar.comprobar().pipe(
      tap(valid => {
        if (!valid) {
          this.router.navigateByUrl('auth/inicio')
        }
      })
    );
  }
}
