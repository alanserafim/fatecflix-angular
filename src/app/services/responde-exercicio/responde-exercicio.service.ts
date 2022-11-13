import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RespondeExercicioService {

  constructor(private http: HttpClient) { }

  realizaExercicio(resposta: string, id: number, cursoId: number, exercicioId: number){
    const API = `${environment.api_url}/api/v1/matriculas/${id}/curso/${cursoId}/exercicio/{exercicioId}/resposta/{resposta}`;
    return this.http.post(API, null);
  }
}
