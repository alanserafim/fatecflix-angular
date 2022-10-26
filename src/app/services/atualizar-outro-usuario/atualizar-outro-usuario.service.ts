import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtualizarOutroUsuarioService {

  id?: number
  private readonly API = `${environment.api_url}/api/v1/usarios/${this.id}`

  constructor(
    private http:HttpClient
  ) { }

  //post
}
