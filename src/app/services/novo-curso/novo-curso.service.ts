import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoCurso } from 'src/app/types/NovoCurso';

@Injectable({
  providedIn: 'root'
})
export class NovoCursoService {

  private API = "https://fatecflix.herokuapp.com/api/v1/cursos"

  constructor(
    private http:HttpClient
  ) { }

  cadastrarNovoCursos(novoCurso : NovoCurso){
    return this.http.post(this.API, {
      dataAtualizacao: novoCurso.dataAtualizacao,
      descricao: novoCurso.descricao,
      mediaAvaliacao: novoCurso.mediaAvaliacao,
      titulo: novoCurso.titulo,
      cargaHorario: novoCurso.cargaHoraria
      })
  }
}
