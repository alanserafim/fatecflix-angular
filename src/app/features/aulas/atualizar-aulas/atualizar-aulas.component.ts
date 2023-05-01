import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrarAulaService } from 'src/app/services/cadastrar-aula/cadastrar-aula.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';
import { Aula } from 'src/app/types/Aula';

@Component({
  selector: 'app-atualizar-aulas',
  templateUrl: './atualizar-aulas.component.html',
  styleUrls: ['./atualizar-aulas.component.css'],
})
export class AtualizarAulasComponent implements OnInit {
  // @ts-ignore: Object is possibly 'undefined'.
  aula: Aula;
  // @ts-ignore: Object is possibly 'undefined'.
  id: number;
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;

  constructor(
    private consultaAula: CadastrarAulaService,
    private route: ActivatedRoute,
    private router: Router,
    private sweeAlertService: SweetalertService
  ) {}

  ngOnInit(): void {
    this.aula = new Aula();
    this.id = this.route.snapshot.params['id'];
    this.cursoId = this.route.snapshot.params['cursoId'];
    console.log(this.cursoId);

    this.consultaAula.getAulaById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.aula = data;
      },
      (error) => console.log(error)
    );
  }

  updateAula() {
    this.consultaAula.atualizarAula(this.aula, this.id, this.cursoId).subscribe(
      (data) => {
        console.log(data);
        this.sweeAlertService.sucessAndMove(
          'Aula atualizada com sucesso',
          `user/aulas/dashboard/${this.cursoId}`,
          'Sucesso'
        );
      },
      (error) => {
        console.log(error);
        this.sweeAlertService.error('Ação não realizada');
      }
    );
  }

  onSubmit() {
    this.updateAula();
  }

  gotoAula() {
    this.router.navigate(['user/aulas/dashboard', this.cursoId]);
  }
}
