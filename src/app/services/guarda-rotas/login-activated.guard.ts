import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../authentication/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivatedGuard implements CanActivate {
  constructor(
    private usuarioService : UsuarioService,
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuarioService.estaLogado()){
        this.router.navigate(['/pages/cursos/menu'])
        return false
      }
      return true;
  }

}
