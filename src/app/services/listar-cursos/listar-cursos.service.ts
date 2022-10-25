import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.httpClient.get(this.API);
 }
}