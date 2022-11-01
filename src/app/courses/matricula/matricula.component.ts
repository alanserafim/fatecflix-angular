import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/types/Matricula';
import { Observable } from 'rxjs';
import { MatricularService } from 'src/app/services/matricular/matricular.service';
@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  matriculas: Observable<Matricula[]>;

  constructor(private matriculaService: MatricularService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.matriculas = this.matriculaService.getMatricula();
    console.log(this.matriculas);
  }
}
