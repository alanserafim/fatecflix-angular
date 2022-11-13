import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaExercicioService } from 'src/app/services/lista-exercicios/lista-exercicio.service';

@Component({
  selector: 'app-responder-exercicio',
  templateUrl: './responder-exercicio.component.html',
  styleUrls: ['./responder-exercicio.component.css']
})
export class ResponderExercicioComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  exercicios: Observable<Exercicio[]>;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  alternativa: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  respostas: string[] = [];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private listarExercicios: ListaExercicioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.exercicios = this.listarExercicios.listarExercicios(this.cursoId);
    console.log(this.exercicios);
  }

}
