import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Historico } from 'src/app/types/Historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  listarAulas(): Observable<any> {
    const API = `${environment.api_url}/api/v1/matriculas/historico`;
    return this.http.get<Historico[]>(API);
  }
}
