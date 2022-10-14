import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NovoUsuario } from './../../personal-data/novo-usuario/novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  cadastraNovoUsuario(novoUsuario : NovoUsuario){
    return this.http.post("endpoint", novoUsuario)
  }

  verificaUsuarioExistente(email : string) {
    return this.http.get(`URL/usuario/existe/${email}`)
  }
}
