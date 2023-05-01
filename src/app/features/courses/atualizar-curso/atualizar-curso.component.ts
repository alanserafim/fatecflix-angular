import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtualizarCursoService } from 'src/app/services/atualizar-curso/atualizar-curso.service';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';
import { Curso } from 'src/app/types/Curso';

@Component({
  selector: 'app-atualizar-curso',
  templateUrl: './atualizar-curso.component.html',
  styleUrls: ['./atualizar-curso.component.css'],
})
export class AtualizarCursoComponent implements OnInit {
  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;

  constructor(
    private route: ActivatedRoute,
    private atualizaCurso: AtualizarCursoService,
    private consultaCurso: ConsultarCursoService,
    private sweeAlertService: SweetalertService
  ) {}

  ngOnInit() {
    this.curso = new Curso();

    this.cursoId = this.route.snapshot.params['id'];

    this.consultaCurso.getCursoById(this.cursoId).subscribe(
      (data) => {
        console.log(data);
        this.curso = data;
      },
      (error) => console.log(error)
    );
  }

  updateCurso() {
    this.atualizaCurso.atualizarCurso(this.curso, this.cursoId).subscribe(
      () => {
        this.sweeAlertService.sucessAndMove(
          'Curso atualizado com sucesso',
          '/cursos/listar',
          'Sucesso'
        );
      },
      (error) => {
      console.log(error);
      this.sweeAlertService.error('Ação não realizada');
      }
    );
  }

  onSubmit() {
    this.updateCurso();
  }
}
