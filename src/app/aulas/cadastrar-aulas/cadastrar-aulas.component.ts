import { Aula } from './../../types/Aula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-aulas',
  templateUrl: './cadastrar-aulas.component.html',
  styleUrls: ['./cadastrar-aulas.component.css']
})
export class CadastrarAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aula: Aula;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.aula = new Aula();
  }

  cadastraNovaAula(){
    this.submitted = true;
    alert("Em desenvolvimento")
  }

}
