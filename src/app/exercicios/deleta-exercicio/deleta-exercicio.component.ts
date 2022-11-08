import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtualizaExercicioService } from 'src/app/services/atualiza-exercicio/atualiza-exercicio.service';
import { DeletaExercicioService } from 'src/app/services/deleta-exercicio/deleta-exercicio.service';
import { Exercicio } from 'src/app/types/Exercicio';

@Component({
  selector: 'app-deleta-exercicio',
  templateUrl: './deleta-exercicio.component.html',
  styleUrls: ['./deleta-exercicio.component.css']
})
export class DeletaExercicioComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  exercicio: Exercicio;
  // @ts-ignore: Object is possibly 'undefined'.
  exercicioId: number;

  constructor(private deletarExercicio: DeletaExercicioService, private consultaExercicio: AtualizaExercicioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.exercicio = new Exercicio();

    this.exercicioId = this.route.snapshot.params['id'];

    this.consultaExercicio.getExercicioById(this.exercicioId)
      .subscribe(data => {
        console.log(data)
        this.exercicio = data;
      }, error => console.log(error)
    );
  }

  deleteExercicio(): void {
    this.deletarExercicio.deletaExercicio(this.exercicioId).subscribe(() => {
      this.router.navigate(["/exercicio/listar"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/exercicio/listar"]);
  }
}