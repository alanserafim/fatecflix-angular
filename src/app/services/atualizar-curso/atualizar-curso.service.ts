import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from 'src/app/types/Curso';
import { NovoCurso } from 'src/app/types/NovoCurso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtualizarCursoService {

  constructor(private http: HttpClient) { }

  atualizarCurso(curso : Curso, id: number){
    const API: string = `${environment.api_url}/api/v1/cursos/${id}`
    return this.http.post(API, curso)
  }
}
