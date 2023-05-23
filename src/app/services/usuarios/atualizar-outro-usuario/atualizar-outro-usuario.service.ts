import { NovoUsuario } from './../../types/NovoUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtualizarOutroUsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  atualizarOutroUsuario(usuario : NovoUsuario, id: number){
    const API: string = `${environment.api_url}/api/v1/usarios/${id}`
    return this.http.post(API, usuario)
  }
}
