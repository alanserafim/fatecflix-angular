import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrarAulaService } from 'src/app/services/aulas/cadastrar-aula/cadastrar-aula.service';
import { SweetalertService } from 'src/app/services/sweetalert/sweetalert.service';
import { Aula } from 'src/app/types/Aula';

@Component({
  selector: 'app-cadastrar-aulas',
  templateUrl: './cadastrar-aulas.component.html',
  styleUrls: ['./cadastrar-aulas.component.css']
})
export class CadastrarAulasComponent implements OnInit {
  aula: Aula = new Aula();
  // @ts-ignore: Object is possibly 'undefined'.
  cursoId: number;


  constructor(
    private router: Router,
    private cadastrarAulaService : CadastrarAulaService,
    private activatedRoute: ActivatedRoute,
    private sweeAlertService: SweetalertService
  ) { }

  ngOnInit(): void {
    this.aula = new Aula();
    this.cursoId = this.activatedRoute.snapshot.params['id'];
  }

  novaAula(): void {
    this.aula = new Aula();
  }

  cadastraNovaAula(){
    this.cadastrarAulaService.cadastrarNovaAula(this.aula, this.cursoId)
    .subscribe((data) => {
      console.log(data);
      this.sweeAlertService.sucessAndMove(
        'Aula cadastrada com sucesso',
        `user/aulas/dashboard/${this.cursoId}`,
        'Sucesso'
      );
    },
    (error)=>{
      this.sweeAlertService.error('Ação não realizada');
      console.log(error);
      console.log(this.aula);
      console.log(this.cursoId)
    })
  }

  onSubmit() {
    this.cadastraNovaAula();
  }

  gotoCurso(id: number) {
    this.router.navigate(['user/cursos/detalhar', id]);
  }
}
