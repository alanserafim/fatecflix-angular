import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercicio } from 'src/app/types/Exercicio';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NovoExercicioService {

  constructor(private http: HttpClient) { }

  cadastrarNovoExercicio(exercicio: Exercicio, id: number){
    const API = `${environment.api_url}/api/v1/exercicios/curso/${id}`
    return this.http.post(API, exercicio);
  }
}
