import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCursoService {

  private readonly API = `${environment.api_url}`

  constructor(private http: HttpClient) { }

  getCursoById(id: number): Observable<any> {
    return this.http.get(`${this.API}/api/v1/cursos/${id}`);
  }
}
