import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aula } from 'src/app/types/Aula';
@Injectable({
  providedIn: 'root'
})
export class ListarAulasService {

  constructor(private http: HttpClient) { }

  listarAulas(cursoId: number): Observable<any> {
    const API = `${environment.api_url}/api/v1/aulas/curso/${cursoId}`;
    return this.http.get<Aula[]>(API);
  }
}
