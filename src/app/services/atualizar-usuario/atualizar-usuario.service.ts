import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtualizarUsuarioService {

  private readonly API = `${environment.api_url}/api/v1/usarios/me`

  constructor(
    private http:HttpClient
  ) { }

  atualizarMeuUsuario(usuario : NovoUsuario){
    return this.http.post(this.API, usuario)
  }
}
