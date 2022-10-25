import { ListaCursosService } from './../../services/listar-cursos/listar-cursos.service';
import { NovoCurso } from './../../types/NovoCurso';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

/**/

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
})
export class ListarCursosComponent implements OnInit {
  cursos: NovoCurso[] = [];
  displayedColumns: string[] = [
    'Título',
    'Descrição',
    'Carga Horária',
    'Atualização',
    'Avaliação',
  ];

  //listaCursosUsuario$ : Observable<NovoCurso> = this.listarCursosService.retornaCursosUsuario();
  //dataSource = new MatTableDataSource(cursos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private listarCursosService: ListaCursosService) {
    this.listarCursosService
      .retornaCursosUsuario()
      .subscribe((cursos) => (this.cursos = cursos));
  }

  ngOnInit(): void {}
}
