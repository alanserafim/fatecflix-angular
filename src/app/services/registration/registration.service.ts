import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  private readonly API = `${environment.api_url}/api/v1/usuarios/signUp`

  constructor(private httpClient: HttpClient) { }
  cadastra(usuario: any): Observable<any>{
    return this.httpClient.post(this.API,  {
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
