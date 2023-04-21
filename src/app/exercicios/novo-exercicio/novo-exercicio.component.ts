import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NovoExercicioService } from 'src/app/services/novo-exercicio/novo-exercicio.service';
import { Exercicio } from 'src/app/types/Exercicio';
import { FormArray, FormBuilder, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-exercicio',
  templateUrl: './novo-exercicio.component.html',
  styleUrls: ['./novo-exercicio.component.css']
})
export class NovoExercicioComponent implements OnInit {

  formAfirmativa = this.fb.group({
    afirmativas: new FormArray([])
  });

  afirmativas = this.formAfirmativa.get('afirmativas') as FormArray;
  exercicio: Exercicio = new Exercicio();
  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;


  constructor(private fb: FormBuilder, private cadastrarExercicioService: NovoExercicioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cursoId = this.activatedRoute.snapshot.params['id'];
  }

  novoExercicio(): void {
    this.submitted = false;
    this.exercicio = new Exercicio();
  }

  cadastraNovoExercicio(){
    let arr: any[] = [];

    for(let value of this.afirmativas.value) {


      console.log(value.afirmativa);
      //this.exercicio.afirmativas?.push(value.afirmativa);
      arr.push(value.afirmativa);
      //console.log(this.exercicio.afirmativas);
    }

    console.log(arr);
    this.exercicio.afirmativas = [];
    for (let el of arr) {
      this.exercicio.afirmativas?.push(el);
    }
    console.log(this.exercicio.afirmativas)

    this.cadastrarExercicioService.cadastrarNovoExercicio(this.exercicio, this.cursoId)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['pages/usuario/sucesso']);
    },
    (error)=>{
      alert("Cadastro não realizado!");
      console.log(error);
      console.log(this.exercicio);
      console.log(this.cursoId)
    })
  }

  addAfirmativa() {
    this.afirmativas.push(
      this.fb.group({
        afirmativa: ''
      })
    );
  }

  removeDoFormArray(controls: FormArray, index: number) {
    controls.removeAt(index);
    this.exercicio.afirmativas?.pop()?.at(index);
  }

  onSubmit() {
    this.submitted = true;
    this.cadastraNovoExercicio();
  }

  gotoList() {
    this.router.navigate(['pages/usuario/sucesso']);
  }

}
