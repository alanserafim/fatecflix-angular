import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  private API = "https://fatecflix.herokuapp.com/api/v1/usuarios/me"

  constructor(
    private httpClient: HttpClient
  ) { }

  retornaUsuarioLogado() {
    const usuario = this.httpClient.get(this.API)
    console.log(usuario);
    return usuario;
  }







}
