import { NovoUsuario } from './../../types/NovoUsuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  private readonly API = `${environment.api_url}/api/v1/usuarios/signUp`;
  constructor(
    private http:HttpClient
  ) { }

  cadastraNovoUsuario(novoUsuario : NovoUsuario){
    return this.http.post(this.API,
      {
        anoIngresso: novoUsuario.anoIngresso,
        cpf: novoUsuario.cpf,
        cursoMatriculado: novoUsuario.cursoMatriculado,
        dtNascimento: novoUsuario.dtNascimento,
        email: novoUsuario.email,
        lastname: novoUsuario.name,
        name: novoUsuario.name,
        password: novoUsuario.password,
        periodo: novoUsuario.periodo,
        ra: novoUsuario.ra,
        roles: [
          "ALUNO"
        ],
        //semestreIngresso: string;
        //confirmacao: string,
        username: novoUsuario.email,
      })
  }

  verificaUsuarioExistente(email : string) {
    return this.http.get(`URL/usuario/existe/${email}`)
  }
}
