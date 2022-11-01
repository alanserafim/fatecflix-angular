import { ListaCursosService } from './../../services/listar-cursos/listar-cursos.service';import { NovoCurso } from './../../types/NovoCurso';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Matricula } from 'src/app/types/Matricula';
import { MatricularService } from 'src/app/services/matricular/matricular.service';

/**/

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
})
export class ListarCursosComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  cursos: Observable<NovoCurso[]>;

  // @ts-ignore: Object is possibly 'undefined'.
  matricula: Matricula;

  // @ts-ignore: Object is possibly 'undefined'.
  matriculado: Observable<Matricula>;
  displayedColumns: string[] = [
    'Título',
    'Descrição',
    'Carga Horária',
    'Atualização',
    'Avaliação',
  ];

  //listaCursosUsuario$ : Observable<NovoCurso> = this.listarCursosService.retornaCursosUsuario();
  //dataSource = new MatTableDataSource(cursos);
  constructor(private listarCursosService: ListaCursosService, private router: Router, private matriculaService: MatricularService) {

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

  matricular(id: number) {

    console.log(id);

    this.matricula = new Matricula(0.0, 0.0, "Em progresso")

    this.matriculaService.matricular(id, this.matricula).subscribe(data => console.log(data),
    error => console.log(error));

    this.router.navigate(['/cursos/matricula']);
  }
}
