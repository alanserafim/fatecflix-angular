import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { Usuario } from 'src/app/types/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ConsultarUsuariosService {

  private readonly API = `${environment.api_url}`

  constructor(private http:HttpClient) { }

  //get
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.API}/api/v1/usuarios`);
  }

  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.API}/api/v1/usuarios/${id}`);
  }

  updateUsuario(id: number, usuario: Usuario) {
    return this.http.post(`${this.API}/api/v1/usuarios/${id}`, usuario)
  }
}
