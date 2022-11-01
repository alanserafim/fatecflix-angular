import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/types/Curso';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  // @ts-ignore: Object is possibly 'undefined'.
  curso: Curso;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  constructor(private consultarCurso: ConsultarCursoService, private router: Router, private route: ActivatedRoute) { }

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

  matricular(){
    
  }

}
