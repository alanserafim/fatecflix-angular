import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtualizarCursoService } from 'src/app/services/atualizar-curso/atualizar-curso.service';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { Curso } from 'src/app/types/Curso';

@Component({
  selector: 'app-atualizar-curso',
  templateUrl: './atualizar-curso.component.html',
  styleUrls: ['./atualizar-curso.component.css']
})
export class AtualizarCursoComponent implements OnInit {

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;

  constructor(private route: ActivatedRoute, private router: Router, private atualizaCurso: AtualizarCursoService, private consultaCurso: ConsultarCursoService) { }

  ngOnInit(){

    this.curso = new Curso();

    this.cursoId = this.route.snapshot.params['id'];

    this.consultaCurso.getCursoById(this.cursoId)
      .subscribe(data => {
        console.log(data)
        this.curso = data;
      }, error => console.log(error)
    );
  }

  updateCurso() {
    this.atualizaCurso.atualizarCurso(this.curso, this.cursoId)
      .subscribe(data => console.log(data), error => console.log(error));
      this.curso = new Curso();

      this.router.navigate(['/cursos/listar']);
  }

  onSubmit() {
    this.updateCurso();
  }

}
