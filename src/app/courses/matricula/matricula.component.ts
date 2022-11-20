import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/types/Matricula';
import { Observable } from 'rxjs';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
import { Curso } from 'src/app/types/Curso';
import { Router } from '@angular/router';
@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  matriculas: Observable<Matricula[]>;
   // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number; 
  constructor(private matriculaService: MatricularService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
     this.matriculas = this.matriculaService.getMatricula();
     console.log(this.matriculas);
  }

  gotoCurso(id: any) {
    this.matriculaService.getCursoByMatricula(id).subscribe(data => {
      this.cursoId = data.curso.cursoId;
      console.log(this.cursoId);
      this.router.navigate(['/cursos/detalhar', this.cursoId]);
    })
  }
}
