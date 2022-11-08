import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercicio } from 'src/app/types/Exercicio';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtualizaExercicioService {

  constructor(private http: HttpClient) { }

  atualizarExercicio(exercicio : Exercicio, id: number, cursoId: number){
    const API: string = `${environment.api_url}/api/v1/exercicios/${id}/curso/${cursoId}`
    return this.http.post(API, exercicio)
  }

  getExercicioById(id: number): Observable<any> {
    return this.http.get(`${environment.api_url}/api/v1/exercicios/${id}`);
  }
}
