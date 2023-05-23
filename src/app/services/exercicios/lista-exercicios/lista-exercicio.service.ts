import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercicio } from 'src/app/types/Exercicio';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListaExercicioService {

  constructor(private http: HttpClient) { }


  listarExercicios(cursoId: number): Observable<any> {
    const API = `${environment.api_url}/api/v1/exercicios/curso/${cursoId}`;
    return this.http.get<Exercicio[]>(API);
  }
}
