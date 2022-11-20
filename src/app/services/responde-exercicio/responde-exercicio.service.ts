import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RespondeExercicioService {

  constructor(private http: HttpClient) { }

  geraHistorico(nota: number, id: number, cursoId: number){
    const API = `${environment.api_url}/api/v1/matriculas/${id}/curso/${cursoId}/nota/${nota}`;
    return this.http.post(API, null);
  }
}
