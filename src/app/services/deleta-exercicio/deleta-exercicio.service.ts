import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeletaExercicioService {

  constructor(private http: HttpClient) { }

  deletaExercicio(id: number){
    const API: string = `${environment.api_url}/api/v1/exercicios/${id}`
    return this.http.delete(API)
  }
}
