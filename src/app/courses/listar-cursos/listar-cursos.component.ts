import { ListaCursosService } from './../../services/listar-cursos/listar-cursos.service';
import { NovoCurso } from './../../types/NovoCurso';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

/**/

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
})
export class ListarCursosComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;
  displayedColumns: string[] = [
    'Título',
    'Descrição',
    'Carga Horária',
    'Atualização',
    'Avaliação',
  ];

  //listaCursosUsuario$ : Observable<NovoCurso> = this.listarCursosService.retornaCursosUsuario();
  //dataSource = new MatTableDataSource(cursos);
  constructor(private listarCursosService: ListaCursosService, private router: Router) {

  }

  listaCursos() {
    this.cursos = this.listarCursosService.retornaCursosUsuario();

    console.log(this.cursos);
  }

  ngOnInit(): void {
    this.listaCursos();
  }

  deletaCurso(id : number) {
    this.router.navigate(['/cursos/deletar', id]);
  }

  atualizaCurso(id : number) {
    this.router.navigate(['/cursos/atualizar', id])
  }
}
