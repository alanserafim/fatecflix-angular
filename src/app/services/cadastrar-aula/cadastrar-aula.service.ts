import { Aula } from './../../types/Aula';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastrarAulaService {



  constructor(
    private http : HttpClient
  ) { }

    cadastrarNovaAula(aula: Aula, id: number){
      const API = `${environment.api_url}/api/v1/aulas/curso/${id}`
      return this.http.post(API, aula)
    }
}
