import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private httpClient: HttpClient) { }
  cadastra(email: string, cpf: string, nome: string, dataNascimento: string, ra: number, curso: string, anoIngresso: string, semestreIngresso: string, periodo: string, senha: string, confirmacao: string): Observable<any>{
    return this.httpClient.post('https://fatecflix-api.herokuapp.com/api/v1/users/signUp', {
    /*
    cpf: cpf,
      email: email,
      password: senha,
      name: nome,
      lastname: nome,
      dataNascimento: dataNascimento,
    */

    });
  }
}
