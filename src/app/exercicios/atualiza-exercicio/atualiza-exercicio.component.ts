import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { Exercicio } from 'src/app/types/Exercicio';
import { AtualizaExercicioService } from 'src/app/services/atualiza-exercicio/atualiza-exercicio.service';

@Component({
  selector: 'app-atualiza-exercicio',
  templateUrl: './atualiza-exercicio.component.html',
  styleUrls: ['./atualiza-exercicio.component.css']
})
export class AtualizaExercicioComponent implements OnInit {
  formAfirmativa = this.fb.group({
    afirmativas: new FormArray([])
  });

  form = this.fb.group({
    neoAf: new FormArray([])
  });

  isDisable = true;

  submitted = false;
  // @ts-ignore: Object is possibly 'undefined'.
  exercicioId: number;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  // @ts-ignore: Object is possibly 'undefined'.
  exercicio: Exercicio;

  afirmativas = this.formAfirmativa.get('afirmativas') as FormArray;
  neoAf = this.form.get('neoAf') as FormArray;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private atualizaExercicio: AtualizaExercicioService) { }

  ngOnInit() {
    this.exercicio = new Exercicio();

    this.exercicioId = this.route.snapshot.params['id'];
    this.cursoId = this.route.snapshot.params['cursoId'];

    this.atualizaExercicio.getExercicioById(this.exercicioId)
      .subscribe(data => {
        console.log(data)
        this.exercicio = data;
         // @ts-ignore: Object is possibly 'undefined'.
        for(const afirmativa of this.exercicio.afirmativas) {
          this.afirmativas.push(new FormControl(afirmativa, Validators.required));
        }
      }, error => console.log(error)
    );

    console.log(this.afirmativas);
  }

  parseJson(json: string): any {
    return JSON.parse(json);
  }

  addAfirmativaNeo() {
    this.neoAf.push(
      this.fb.group({
        neo: '',
      }),
    );
  }

  upAfirmativa() {
    this.isDisable = false;
  }

  getAfirmativas(form: FormArray) {
    // @ts-ignore: Object is possibly 'null'.
    return form.get('afirmativas').controls;
  }

  removeDoFormArray(controls: FormArray, index: number) {
    controls.removeAt(index);
    this.exercicio.afirmativas?.pop()?.at(index);
  }

  updateExercicio() {
    //console.log(this.afirmativas.value);

    for(let value of this.afirmativas.value) {
      console.log(value.afirmativa);
      this.exercicio.afirmativas?.push(value.afirmativa);
    }

    for(let el of this.neoAf.value) {
      console.log(el.neo);
      this.exercicio.afirmativas?.push(el.neo);
    }

    this.atualizaExercicio.atualizarExercicio(this.exercicio, this.exercicioId, this.cursoId)
      .subscribe(data => console.log(data), error => console.log(error));
      this.exercicio = new Exercicio();
      // @ts-ignore: Object is possibly 'undefined'.
      this.gotoList();
  }

  onSubmit() {
    this.updateExercicio();
  }

  gotoList() {
    this.router.navigate(['/usuario/sucesso']);
  }

}
