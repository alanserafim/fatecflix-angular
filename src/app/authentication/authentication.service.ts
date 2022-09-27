import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  autentica(email: string, senha: string): Observable<any>{
    return this.httpClient.post('https://fatecflix-api.herokuapp.com/api/v1/users/signIn', {
      login: email,
      password: senha,
    });
  }
}

