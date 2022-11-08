import { Aula } from './../../types/Aula';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

    getAulaById(id: number): Observable<any> {
      return this.http.get(`${environment.api_url}/api/v1/aulas/${id}`);
    }

    atualizarAula(aula : Aula, id: number, cursoId: number){
      const API: string = `${environment.api_url}/api/v1/aulas/${id}/curso/${cursoId}`
      return this.http.post(API, aula)
    }

    deletaAula(id: number){
      const API: string = `${environment.api_url}/api/v1/aulas/${id}`
      return this.http.delete(API)
    }
}
