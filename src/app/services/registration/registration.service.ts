import { Usuario } from '../../personal-data/signup/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearte'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private httpClient: HttpClient) { }
  cadastra(usuario: Usuario): Observable<any>{
    return this.httpClient.post('https://fatecflix-api.herokuapp.com/api/v1/users/signUp',  {
    email: usuario.email,
    cpf: usuario.cpf,
    lastname: usuario.nome,
    name: usuario.nome,
    password: usuario.senha,
    roles: usuario.perfil,
    username: usuario.nome,
    });
  }
}
