import { Observable } from 'rxjs';
import { Comentario } from './../../types/Comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  deletaComentario(id: number){
    const API: string = `${environment.api_url}/api/v1/comentarios/${id}`
    return this.http.delete(API)
  }

  comentarios(aulaId: number): Observable<any> {
    const API = `${environment.api_url}/api/v1/comentarios/aula/${aulaId}`;
    return this.http.get<Comentario[]>(API);
  }

  comentar(comentario: Comentario, aulaId: number){
    const API = `${environment.api_url}/api/v1/comentarios/aula/${aulaId}`
    return this.http.post(API, comentario)
  }

  getComentarioById(id: number): Observable<any> {
    const API = `${environment.api_url}/api/v1/comentarios/${id}`
    return this.http.get(API);
  }
}
