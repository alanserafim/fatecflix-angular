import { NovoCurso } from 'src/app/types/NovoCurso';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const listaDeCursos: any[] = [
  {posicao: 1, curso: 'Node', progresso: 40, status: 'Em andamento', certificado: 'Indisponível'},
  {posicao: 2, curso: 'Spring', progresso: 10, status: 'Em andamento', certificado: 'Indisponível'},
  {posicao: 3, curso: 'Estrutura de Dados', progresso: 100, status: 'Concluído', certificado: 'Disponível'},
];


@Component({
  selector: 'app-cursos-matriculados',
  templateUrl: './cursos-matriculados.component.html',
  styleUrls: ['./cursos-matriculados.component.css']
})
export class CursosMatriculadosComponent implements OnInit {

  displayedColumns: string[] = ['posicao', 'curso', 'progresso', 'status', 'certificado'];
  dataSource = new MatTableDataSource(listaDeCursos);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
