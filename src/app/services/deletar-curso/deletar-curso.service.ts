import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeletarCursoService {

  constructor(private http: HttpClient) { }

  deletaCurso(id: number){
    const API: string = `${environment.api_url}/api/v1/cursos/${id}`
    return this.http.delete(API)
  }

}
