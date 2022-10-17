import { NovoUsuario } from './../../types/NovoUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  private API = "https://fatecflix-api.herokuapp.com/api/v1/users/signUp"

  constructor(
    private http:HttpClient
  ) { }

  cadastraNovoUsuario(novoUsuario : NovoUsuario){
    return this.http.post(this.API,
      {
        email: novoUsuario.email,
        cpf: novoUsuario.cpf,
        lastname: novoUsuario.nome,
        name: novoUsuario.nome,
        password: novoUsuario.senha,
        roles: novoUsuario.perfil,
        username: novoUsuario.nome,
      });
  }

  verificaUsuarioExistente(email : string) {
    return this.http.get(`URL/usuario/existe/${email}`)
  }
}
