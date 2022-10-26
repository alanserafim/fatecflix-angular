import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarUsuariosService {

  private readonly API = `${environment.api_url}/api/v1/usuarios`

  constructor(
    private http:HttpClient
  ) { }

  //get

}
