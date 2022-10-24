import { UsuarioLogado } from './../../../types/UsuarioLogado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {

  private readonly API = "https://fatecflix.herokuapp.com/api/v1/usuarios/me"

  constructor(
    private httpClient: HttpClient
  ) {
  }

  retornaUsuarioLogado(): Observable<any> {
    return this.httpClient.get<UsuarioLogado>(this.API)
  }







}
