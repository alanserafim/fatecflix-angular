import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from 'src/app/types/NovoUsuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeletarUsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  deletaUsuario(id: number){
    const API: string = `${environment.api_url}/api/v1/usuarios/${id}`
    return this.http.delete(API)
  }

}
