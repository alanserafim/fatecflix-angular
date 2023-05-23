import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from 'src/app/types/Matricula';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NovoUsuario } from 'src/app/types/NovoUsuario';

@Injectable({
  providedIn: 'root'
})
export class MatricularService {

  constructor(private http: HttpClient) {
   }

   matricular(cursoId: number, matricula: Matricula) {
    const API: string = `${environment.api_url}/api/v1/matriculas/curso/${cursoId}`
    return this.http.post(API, matricula);
   }

   getMatricula(): Observable<any> {
    const API: string = `${environment.api_url}/api/v1/matriculas`
    return this.http.get<Matricula[]>(API);
   }

   getCursoByMatricula(matriculaId: number): Observable<any> {
    const API: string = `${environment.api_url}/api/v1/matriculas/${matriculaId}`;
    return this.http.get<Matricula[]>(API);
   }

   getMatriculasByCurso(cursoId: number): Observable<any> {
    const API: string = `${environment.api_url}/api/v1/matriculas/usuario/curso/${cursoId}`;
    return this.http.get<NovoUsuario[]>(API);
   }
}
