import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matricula } from 'src/app/types/Matricula';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
}
