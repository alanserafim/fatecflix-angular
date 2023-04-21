import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
import { DeletarCursoService } from 'src/app/services/deletar-curso/deletar-curso.service';
import { Curso } from 'src/app/types/Curso';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.css']
})
export class DeletarCursoComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  constructor(private deletarCurso: DeletarCursoService, private consultarCurso: ConsultarCursoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.curso = new Curso();

    this.cursoId = this.route.snapshot.params['id'];

    this.consultarCurso.getCursoById(this.cursoId)
      .subscribe(data => {
        console.log(data)
        this.curso = data;
      }, error => console.log(error)
    );
  }

  deleteCurso(): void {
    this.deletarCurso.deletaCurso(this.cursoId).subscribe(() => {
      this.router.navigate(["pages/cursos/listar"]);
    });
  }

  cancel(): void {
    this.router.navigate(["pages/cursos/listar"]);
  }

}
