import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private httpClient: HttpClient) { }
  cadastra(
    email: string,
    cpf: string,
    nome: string,
    //dataNascimento: string,
    //ra: number,
    //curso: string,
    //anoIngresso: string,
    //semestreIngresso: string,
    //periodo: string,
    senha: string,
    //confirmacao: string,
    perfil: string
    ): Observable<any>{
    return this.httpClient.post('https://fatecflix-api.herokuapp.com/api/v1/users/signUp', {
    email: email,
    cpf: cpf,
    lastname: nome,
    name: nome,
    password: senha,
    roles: perfil,
    username: email,
    });
  }
}
