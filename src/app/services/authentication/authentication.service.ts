import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API = "https://fatecflix.herokuapp.com/api/v1/users/signIn"

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
    ) {}

  autentica(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.API, {
      login: email,
      password: senha,
    },
    { observe: 'response'}
    )
    /*.pipe(
      tap((res) =>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )*/
  }
}

