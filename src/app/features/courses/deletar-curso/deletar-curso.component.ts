import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { DeletarCursoService } from 'src/app/services/deletar-curso/deletar-curso.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';
import { Curso } from 'src/app/types/Curso';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.css'],
})
export class DeletarCursoComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  constructor(
    private deletarCurso: DeletarCursoService,
    private consultarCurso: ConsultarCursoService,
    private router: Router,
    private route: ActivatedRoute,
    private sweeAlertService: SweetalertService
  ) {}

  ngOnInit() {
    this.curso = new Curso();

    this.cursoId = this.route.snapshot.params['id'];

    this.consultarCurso.getCursoById(this.cursoId).subscribe(
      (data) => {
        console.log(data);
        this.curso = data;
      },
      (error) => console.log(error)
    );
  }

  deleteCurso(): void {
    this.deletarCurso.deletaCurso(this.cursoId).subscribe(
      () => {
        this.sweeAlertService.sucessAndMove(
          'Curso excluido com sucesso',
          'user/cursos/listar',
          'Sucesso'
        );
      },
      (error) => {
        this.sweeAlertService.error('Ação não realizada');
      }
    );
  }

  cancel(): void {
    this.router.navigate(['user/cursos/listar']);
  }
}
