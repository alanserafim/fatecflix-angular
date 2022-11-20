import { NovoCurso } from './../../types/NovoCurso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaCursosService {

  private readonly API = `${environment.api_url}/api/v1/cursos`
  constructor(
    private httpClient: HttpClient
  ) { }


 retornaCursosUsuario(): Observable<any> {
    return this.httpClient.get<NovoCurso[]>(this.API)
    .pipe(
      tap(cursos => console.log(cursos))
    );
 }

 returnaCursosPelaCategoria(categoria: string): Observable<any> {
  return this.httpClient.get<NovoCurso[]>(`${this.API}/categoria/${categoria}`);
 }
}
