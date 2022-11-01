import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/types/Curso';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConsultarCursoService } from 'src/app/services/consultar-curso/consultar-curso.service';
@Component({
  selector: 'app-listar-matriculas',
  templateUrl: './listar-matriculas.component.html',
  styleUrls: ['./listar-matriculas.component.css']
})
export class ListarMatriculasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void{

  }

}
